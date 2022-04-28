import {Schema, model} from 'mongoose';

const attendanceSchema = new Schema({
    user: {type : mongoose.Schema.ObjectId, ref : 'User'},
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

const attendanceModel = model('attendance', attendanceSchema);

export {attendanceModel};