"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostService = void 0;
const common_1 = require("@nestjs/common");
let PostService = class PostService {
    constructor() {
        this.posts = [];
    }
    create(createPostDto) {
        const newPost = { id: Date.now(), ...createPostDto };
        this.posts.push(newPost);
        return newPost;
    }
    findAll() {
        return this.posts;
    }
    findOne(id) {
        return this.posts.find(post => post.id === id);
    }
    update(id, updatePostDto) {
        const postIndex = this.posts.findIndex(post => post.id === id);
        if (postIndex === -1) {
            return null;
        }
        const updatedPost = { ...this.posts[postIndex], ...updatePostDto };
        this.posts[postIndex] = updatedPost;
        return updatedPost;
    }
    remove(id) {
        const postIndex = this.posts.findIndex(post => post.id === id);
        if (postIndex === -1) {
            return null;
        }
        const deletedPost = this.posts.splice(postIndex, 1);
        return deletedPost;
    }
};
exports.PostService = PostService;
exports.PostService = PostService = __decorate([
    (0, common_1.Injectable)()
], PostService);
//# sourceMappingURL=post.service.js.map