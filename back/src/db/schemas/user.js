import { Schema, model } from 'mongoose';

const UserSchema = new Schema(
  {
    id: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    nickname: {
      type: String,
      required: true,
    },
    sex: {
      type: String,
      required: true,
    },
    age:{
      type: Number,
      required: true,
    },
    interest:{
      type: Number,
      required: true,
    },
    likeType:{
      type: String,
      required: true,
    },
    point:{
      type: Number,
      default: 0,
      required: false,
    },
    profileImg: {
      type: String,
      default: "pocketball.png",
      required: false,
    },
    stickers: [
      {
        id: String,
        name: String,
        count: Number 
      }
    ],
    attendance: {
      type: Date,
      required : false,
      default: Date.now(),
    },
    isPointGiven: {
        type: Boolean,
        required : false,
        default: false,
    }
  },
  {
    timestamps: true,
  }
);

const UserModel = model('User', UserSchema);

export { UserModel };
