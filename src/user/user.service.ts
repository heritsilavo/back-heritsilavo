import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User,UserDocument } from './schemas/user.shemas';
import { CreateUserDto } from './dto/user.dto';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private UserModel: Model<UserDocument>) {}

  // Méthode pour la connexion d'un User
  async login(infos: { username: string; mdp: string }): Promise<any> {
    const user = await this.UserModel.findOne({ username: infos.username }).exec();
    if (!user) {
      return {error:"Utilisateur non trouvée"}
    }

    const isPasswordValid = (user.mdp === infos.mdp)
    if (!isPasswordValid) {
      return {error:"Mot de passe incorrecte"}
    }

    return user.toObject();
  }

  // Méthode pour créer un nouveau User
  async create(createUserDto: CreateUserDto): Promise<User> {
    const createdUser = new this.UserModel(createUserDto);
    return createdUser.save();
  }

  // Méthode pour récupérer tous les Users
  async findAll(): Promise<User[]> {
    return this.UserModel.find().exec();
  }

  // Méthode pour récupérer un User par son ID
  async findOne(id: string): Promise<User> {
    return this.UserModel.findById(id).exec();
  }

  // Méthode pour mettre à jour un User
  async update(id: string, updateUserDto: CreateUserDto): Promise<User> {
    return this.UserModel.findByIdAndUpdate(id, updateUserDto, { new: true }).exec();
  }

  // Méthode pour supprimer un User
  async delete(id: string): Promise<User> {
    return this.UserModel.findByIdAndDelete(id).exec()
  }

   // Méthode pour récupérer les amis d'un utilisateur
   async getFriends(userId: string): Promise<User[]> {
    const user = await this.UserModel.findById(userId).exec();
    if (!user) {
      throw new Error('Utilisateur non trouvé');
    }

    // Récupérer les IDs des amis
    const friendIds = user.amis;

    // Récupérer les détails des amis
    return this.UserModel.find({ _id: { $in: friendIds } }).exec();
  }

  // Méthode pour récupérer les utilisateurs qui ne sont pas amis
  async findNonFriends(userId: string): Promise<User[]> {
    // Trouver l'utilisateur par ID
    const user = await this.UserModel.findById(userId).exec();
    if (!user) {
      throw new NotFoundException('Utilisateur non trouvé');
    }

    // Trouver tous les utilisateurs qui ne sont pas amis avec l'utilisateur donné
    const allUsers = await this.UserModel.find({ _id: { $ne: userId } }).exec();
    return allUsers.filter(u => !user.amis.includes(u._id.toString()));
  }

  // Méthode pour récupérer les utilisateurs par leurs IDs
  async findUsersByIds(userIds: string[]): Promise<any> {
    return this.UserModel.find({ _id: { $in: userIds } }).exec();
  }

  async addFriend(userId: string, friendId: string): Promise<User> {
    const user = await this.UserModel.findById(userId).exec();
    if (!user) {
      throw new Error('User not found');
    }
    if (!user.amis.includes(friendId)) {
      user.amis.push(friendId);
    }
    return user.save();
  }
}