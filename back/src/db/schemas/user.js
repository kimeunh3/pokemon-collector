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
 *            - quizChance
 *          properties:
 *             id:
 *               type: string
 *             email:
 *               type: string
 *             password:
 *               type: string
 *             nickname:
 *               type: string
 *             sex:
 *               type: string
 *             birth:
 *               type: date
 *             interest:
 *               type: string
 *             likeType:
 *               type: string
 *             point:
 *               type: number
 *               default: 1000
 *             profileImg:
 *               type: String
 *               default: 'poketball.png'
 *             stickers:
 *               type: array
 *               items:
 *                 type: object
 *               properties:
 *                 id:
 *                   type: number
 *                 name:
 *                   type: string
 *                 count:
 *                   type: number
 *             isPointGiven:
 *               type: boolean
 *               default: true
 *             quizChance:
 *               type: number
 *               default: 3
 *             achievements:
 *               type: array
 *               items:
 *                 type: object
 *               default:
 *                - id: 1
 *                  status: 0
 *                - id: 2
 *                  status: 0
 *                - id: 1
 *                  status: 0
 *                - id: 3
 *                  status: 0
 *                - id: 4
 *                  status: 0
 *                - id: 5
 *                  status: 0
 *                - id: 6
 *                  status: 0
 *                - id: 7
 *                  status: 0
 *                - id: 8
 *                  status: 0
 *                - id: 9
 *                  status: 0
 *                - id: 10
 *                  status: 0
 *                - id: 11
 *                  status: 0
 *                - id: 12
 *                  status: 0
 *                - id: 13
 *                  status: 0
 *                - id: 14
 *                  status: 0
 *                - id: 15
 *                  status: 0
 *                - id: 16
 *                  status: 0
 *                - id: 17
 *                  status: 0
 *                - id: 18
 *                  status: 0
 *                - id: 19
 *                  status: 0
 *                - id: 20
 *                  status: 0
 *
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
    birth: {
      type: Date,
      required: true,
    },
    interest: {
      type: Number,
      required: true,
    },
    likeType: {
      type: String,
      required: true,
    },
    point: {
      type: Number,
      default: 1000,
      required: false,
    },
    profileImg: {
      type: String,
      default: 'pockeball.png',
      required: false,
    },
    stickers: [
      {
        id: Number,
        name: String,
        count: Number,
      },
    ],
    attendance: {
      type: Date,
      required: false,
      default: Date.now(),
    },
    isPointGiven: {
      type: Boolean,
      required: false,
      default: true,
    },
    quizChance: {
      type: Number,
      required: true,
      default: 3,
    },
    rankPoint: {
      type: Number,
      required: false,
      default: 0,
    },
    achievements: {
      type: Array,
      default: [
        {
          id: 1,
          status: 0,
        },
        {
          id: 2,
          status: 0,
        },
        {
          id: 3,
          status: 0,
        },
        {
          id: 4,
          status: 0,
        },
        {
          id: 5,
          status: 0,
        },
        {
          id: 6,
          status: 0,
        },
        {
          id: 7,
          status: 0,
        },
        {
          id: 8,
          status: 0,
        },
        {
          id: 9,
          status: 0,
        },
        {
          id: 10,
          status: 0,
        },
        {
          id: 11,
          status: 0,
        },
        {
          id: 12,
          status: 0,
        },
        {
          id: 13,
          status: 0,
        },
        {
          id: 14,
          status: 0,
        },
        {
          id: 15,
          status: 0,
        },
        {
          id: 16,
          status: 0,
        },
        {
          id: 17,
          status: 0,
        },
        {
          id: 18,
          status: 0,
        },
        {
          id: 19,
          status: 0,
        },
      ],
    },
  },
  {
    timestamps: true,
  }
);

const UserModel = model('User', UserSchema);

export { UserModel };
