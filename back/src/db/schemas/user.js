/**
 * @swagger
 *  components:
 *     schemas:
 *        user:
 *          type: object
 *          required:
 *            - id
 *            - email
 *            - password
 *            - nickname
 *            - sex
 *            - birth
 *            - interest
 *            - likeType
 *          properties:
 *             nickname:
 *               type: string
 *         
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
    birth:{
      type: Date,
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
      default: 1000,
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
        default: true,
    }
  },
  {
    timestamps: true,
  }
);

const UserModel = model('User', UserSchema);

export { UserModel };
