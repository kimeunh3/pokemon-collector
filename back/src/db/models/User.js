import { UserModel } from "../schemas/user";

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

  static async findStickerListById({user_id}){
    const userStickers = await UserModel.findOne({ id: user_id },{stickers:1});
    const stickerList = userStickers.stickers.map(sticker=>sticker.id);
    return stickerList;
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

  static async findPointById({ user_id }) {
    const {point} = await UserModel.findOne({ id:user_id }, {point:1});
    return point;
  }

  static async updateStickers({user_id, id, name}){
    const sticker = {id, name};
    const {stickers} = await UserModel.findOneAndUpdate(
      {id : user_id},
      { $push: {stickers: sticker}},
      {new: true}
    );
    return stickers;
  }

  static async updatePoint({user_id, changedPoint}){
    const {point} = await UserModel.findOneAndUpdate(
      { id:user_id },
      { $set: { point: changedPoint } },
      {new: true}
    );
    return point;
  }
}

export { User };
