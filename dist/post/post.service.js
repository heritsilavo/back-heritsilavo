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
exports.PostService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const post_shemas_1 = require("./schemas/post.shemas");
const user_service_1 = require("../user/user.service");
let PostService = class PostService {
    constructor(postModel, userService) {
        this.postModel = postModel;
        this.userService = userService;
    }
    async create(createPostDto) {
        const newPost = new this.postModel(createPostDto);
        return newPost.save();
    }
    async findAll() {
        return this.postModel.find().exec();
    }
    async findOne(id) {
        return this.postModel.findById(id).exec();
    }
    async update(id, updatePostDto) {
        return this.postModel.findByIdAndUpdate(id, updatePostDto, { new: true }).exec();
    }
    async remove(id) {
        return this.postModel.findByIdAndDelete(id).exec();
    }
    async findPostsByFriends(userId) {
        const user = await this.userService.findOne(userId);
        const friendsIds = user.amis;
        return this.postModel.find({ idUser: { $in: friendsIds } }).sort({ date: -1 }).exec();
    }
    async deleteAll() {
        await this.postModel.deleteMany({}).exec();
    }
};
exports.PostService = PostService;
exports.PostService = PostService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(post_shemas_1.Post.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        user_service_1.UserService])
], PostService);
//# sourceMappingURL=post.service.js.map