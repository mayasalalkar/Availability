const mongoose = require('mongoose');

const sessionSchema = new mongoose.Schema({
    users: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    admin: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    start: String,
    end: String,
    sessionType: { type: String, enum: ['one-on-one', 'group'], required: true }
});

module.exports = mongoose.model('Session', sessionSchema);
