import { Injectable } from '@nestjs/common';
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
}