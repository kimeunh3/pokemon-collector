/*
 * <user 정보 Schema 정의>
 * 작성자 : 김보현
 * 작성일 : 2022.04.21
 */

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
        img: String, 
      }
    ],
    lastLogin: {
      type : Date,
      required : false,
      default: () => new Date(),
    }
  },
  {
    timestamps: true,
  }
);

const UserModel = model('User', UserSchema);

export { UserModel };
