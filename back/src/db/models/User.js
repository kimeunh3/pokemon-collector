import { UserModel } from '../schemas/user';

class User {
  static async create({ newUser }) {
    const createdNewUser = await UserModel.create(newUser);
    return createdNewUser;
  }

  static async findByEmail({ email }) {
    const user = await UserModel.findOne({ email });
    return user;
  }

  static async findById({ userId }) {
    const user = await UserModel.findOne({ id: userId });
    return user;
  }

  static async findAll() {
    const users = await UserModel.find({});
    return users;
  }

  static async update({ userId, fieldToUpdate, newValue }) {
    const filter = { id: userId };
    const update = { [fieldToUpdate]: newValue };
    const option = { returnOriginal: false };

    const updatedUser = await UserModel.findOneAndUpdate(
      filter,
      update,
      option
    );
    return updatedUser;
  }

  static async findPointById({ userId }) {
    const { point } = await UserModel.findOne({ id: userId }, { point: 1 });
    return point;
  }

  static async updateStickers({ userId, id, name }) {
    const userStickers = await UserModel.findOne(
      { id: userId, 'stickers.id': id },
      { _id: 0, 'stickers.$': 1 }
    );
    if (userStickers) {
      return await UserModel.findOneAndUpdate(
        { id: userId, 'stickers.id': id },
        { $set: { 'stickers.$.count': userStickers.stickers[0].count + 1 } },
        { new: true }
      );
    } else {
      return await UserModel.findOneAndUpdate(
        { id: userId },
        { $push: { stickers: { id, name, count: 1 } } },
        { new: true }
      );
    }
  }

  static async updatePoint({ userId, changedPoint }) {
    const { point } = await UserModel.findOneAndUpdate(
      { id: userId },
      { $set: { point: changedPoint } },
      { new: true }
    );
    return point;
  }
}

export { User };
