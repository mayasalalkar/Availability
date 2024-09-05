const User = require('../models/User');

exports.updateAvailability = async (req, res) => {
    const { day, start, end } = req.body;
    const userId = req.user.userId;

    try {
        const user = await User.findById(userId);
        if (!user) return res.status(404).json({ message: 'User not found' });

        user.availability.push({ day, start, end });
        await user.save();

        res.status(200).json(user.availability);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getAvailability = async (req, res) => {
    const userId = req.user.userId;

    try {
        const user = await User.findById(userId);
        if (!user) return res.status(404).json({ message: 'User not found' });

        res.status(200).json(user.availability);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
