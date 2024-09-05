const User = require('../models/User');
const Session = require('../models/Session');

exports.getAllUsers = async (req, res) => {
    try {
        const users = await User.find({ role: 'user' }).select('-password');
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.scheduleSession = async (req, res) => {
    const { users, start, end, sessionType } = req.body;

    try {
        // Check for session conflicts
        const conflictingSessions = await Session.find({
            users: { $in: users },
            $or: [{ start: { $lt: end } }, { end: { $gt: start } }]
        });

        if (conflictingSessions.length > 0) {
            return res.status(400).json({ message: 'Conflicting session found' });
        }

        // Schedule session
        const session = await Session.create({ users, start, end, sessionType, admin: req.user.userId });
        res.status(201).json(session);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
