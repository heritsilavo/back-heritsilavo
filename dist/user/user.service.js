"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const user_shemas_1 = require("./schemas/user.shemas");
let UserService = class UserService {
    constructor(UserModel) {
        this.UserModel = UserModel;
    }
    async login(infos) {
        const user = await this.UserModel.findOne({ username: infos.username }).exec();
        if (!user) {
            return { error: "Utilisateur non trouvée" };
        }
        const isPasswordValid = (user.mdp === infos.mdp);
        if (!isPasswordValid) {
            return { error: "Mot de passe incorrecte" };
        }
        return user.toObject();
    }
    async create(createUserDto) {
        const createdUser = new this.UserModel(createUserDto);
        return createdUser.save();
    }
    async findAll() {
        return this.UserModel.find().exec();
    }
    async findOne(id) {
        return this.UserModel.findById(id).exec();
    }
    async update(id, updateUserDto) {
        return this.UserModel.findByIdAndUpdate(id, updateUserDto, { new: true }).exec();
    }
    async delete(id) {
        return this.UserModel.findByIdAndDelete(id).exec();
    }
    async getFriends(userId) {
        const user = await this.UserModel.findById(userId).exec();
        if (!user) {
            throw new Error('Utilisateur non trouvé');
        }
        const friendIds = user.amis;
        return this.UserModel.find({ _id: { $in: friendIds } }).exec();
    }
    async addFriend(userId, friendId) {
        const user = await this.UserModel.findById(userId).exec();
        if (!user) {
            throw new Error('Utilisateur non trouvé');
        }
        if (user.amis.includes(friendId)) {
            throw new Error('L\'utilisateur est déjà un ami');
        }
        user.amis.push(friendId);
        return user.save();
    }
    async findNonFriends(userId) {
        const user = await this.UserModel.findById(userId).exec();
        if (!user) {
            throw new common_1.NotFoundException('Utilisateur non trouvé');
        }
        const allUsers = await this.UserModel.find({ _id: { $ne: userId } }).exec();
        return allUsers.filter(u => !user.amis.includes(u._id.toString()));
    }
    async findUsersByIds(userIds) {
        return this.UserModel.find({ _id: { $in: userIds } }).exec();
    }
};
exports.UserService = UserService;
exports.UserService = UserService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(user_shemas_1.User.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], UserService);
//# sourceMappingURL=user.service.js.map