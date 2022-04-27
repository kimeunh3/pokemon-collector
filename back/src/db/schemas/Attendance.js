import mongoose from 'mongoose';

const attendanceSchema = mongoose.Schema({
    student: {type : mongoose.Schema.ObjectId, ref : 'user'},
    date: {
        type: Date,
        // required: true
    },  
    time: {
        type: String,
        // required: true
    },  
    timestamp: {
        type: Date,
        required: true
    },  
    isEntered: {
        type: String,
        required: true
    }, 
}, {
    timestamps: true
});

module.exports = mongoose.model('attendance', attendanceSchema);