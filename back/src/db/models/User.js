import { UserModel } from "../schemas/user";
import { attendanceModel } from '../schemas/attendance';
class User {
  static async create({ newUser }) {
    const createdNewUser = await UserModel.create(newUser);
    return createdNewUser;
  }

  static async findByEmail({ email }) {
    const user = await UserModel.findOne({ email });
    return user;
  }

  static async findById({ user_id }) {
    const user = await UserModel.findOne({ id: user_id });
    return user;
  }

  static async findAll() {
    const users = await UserModel.find({});
    return users;
  }

  static async update({ user_id, fieldToUpdate, newValue }) {
    const filter = { id: user_id };
    const update = { [fieldToUpdate]: newValue };
    const option = { returnOriginal: false };

    const updatedUser = await UserModel.findOneAndUpdate(
      filter,
      update,
      option
    );
    return updatedUser;
  }

<<<<<<< HEAD
=======
  static async findPointById({ user_id }) {
    const {point} = await UserModel.findOne({ id:user_id }, {point:1});
    return point;
  }

  static async updateStickers({user_id, id, name}){  
    const userStickers = await UserModel.findOne(
      { id: user_id, 'stickers.id':id},
      {_id:0, 'stickers.$':1}
      );
    if(userStickers){
        return await UserModel.findOneAndUpdate(
        {id : user_id,'stickers.id':id},
        { $set: {'stickers.$.count': userStickers.stickers[0].count+1}},
        {new: true}
      );
    }else{
      return await UserModel.findOneAndUpdate(
        {id : user_id},
        { $push: {stickers:{id, name, count:1}}},
        {new: true}
      );
    }
  }

  static async updatePoint({user_id, changedPoint}){
    const {point} = await UserModel.findOneAndUpdate(
      { id:user_id },
      { $set: { point: changedPoint } },
      {new: true}
    );
    return point;
  }
>>>>>>> cb6f4e8a32be78568a32d62df4cfbfa452dc16b2
}

export { User };
