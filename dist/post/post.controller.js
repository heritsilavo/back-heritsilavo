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
exports.PostController = void 0;
const common_1 = require("@nestjs/common");
const post_service_1 = require("./post.service");
const post_dto_1 = require("./dto/post.dto");
const swagger_1 = require("@nestjs/swagger");
let PostController = class PostController {
    constructor(postService) {
        this.postService = postService;
    }
    create(createPostDto) {
        return this.postService.create(createPostDto);
    }
    findAll() {
        return this.postService.findAll();
    }
    findOne(id) {
        return this.postService.findOne(id);
    }
    update(id, updatePostDto) {
        return this.postService.update(id, updatePostDto);
    }
    remove(id) {
        return this.postService.remove(id);
    }
    removeAll() {
        return this.postService.deleteAll();
    }
    findPostsByFriends(userId) {
        return this.postService.findPostsByFriends(userId);
    }
};
exports.PostController = PostController;
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Create a new post' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'The post has been successfully created.' }),
    (0, swagger_1.ApiBody)({
        type: post_dto_1.CreatePostDto,
        examples: {
            'application/json': {
                summary: 'Example of a post creation request',
                value: {
                    image: 'http://example.com/image.jpg',
                    nbrVote: 10,
                    date: '2024-07-29T12:34:56.789Z',
                    heure: '14:00',
                    legende: 'A beautiful sunset',
                    idUser: '60b8d295f8b6c6a12c8d4e44'
                }
            }
        }
    }),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [post_dto_1.CreatePostDto]),
    __metadata("design:returntype", void 0)
], PostController.prototype, "create", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Get all posts' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Return all posts.' }),
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PostController.prototype, "findAll", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Get a post by ID' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'ID of the post to retrieve' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Return the post.' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Post not found' }),
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PostController.prototype, "findOne", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Update a post by ID' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'ID of the post to update' }),
    (0, swagger_1.ApiBody)({
        type: post_dto_1.CreatePostDto,
        description: 'Updated post data',
        examples: {
            'application/json': {
                summary: 'Example of a post update request',
                value: {
                    image: 'http://example.com/updated-image.jpg',
                    nbrVote: 20,
                    date: '2024-07-30T12:34:56.789Z',
                    heure: '16:00',
                    legende: 'An updated beautiful sunset',
                    idUser: '60b8d295f8b6c6a12c8d4e44'
                }
            }
        }
    }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'The post has been successfully updated.' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Post not found' }),
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], PostController.prototype, "update", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Delete a post by ID' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'ID of the post to delete' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'The post has been successfully deleted.' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Post not found' }),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PostController.prototype, "remove", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Delete all posts' }),
    (0, common_1.Get)("removeAll"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PostController.prototype, "removeAll", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Get posts from friends, sorted by most recent' }),
    (0, swagger_1.ApiParam)({ name: 'userId', description: 'ID of the user to retrieve friends\' posts for' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Return posts from friends sorted by most recent' }),
    (0, common_1.Get)('friends/:userId'),
    __param(0, (0, common_1.Param)('userId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PostController.prototype, "findPostsByFriends", null);
exports.PostController = PostController = __decorate([
    (0, swagger_1.ApiTags)('posts'),
    (0, common_1.Controller)('posts'),
    __metadata("design:paramtypes", [post_service_1.PostService])
], PostController);
//# sourceMappingURL=post.controller.js.map