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
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostSchema = exports.Post = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
let Post = class Post {
};
exports.Post = Post;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'URL of the image' }),
    (0, class_validator_1.IsString)(),
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Post.prototype, "image", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Number of votes', example: 0 }),
    (0, class_validator_1.IsNumber)(),
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], Post.prototype, "nbrVote", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Date of the post', example: '2023-07-21T14:48:00.000Z' }),
    (0, class_validator_1.IsDate)(),
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Date)
], Post.prototype, "date", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Time of the post', example: '14:48:00' }),
    (0, class_validator_1.IsString)(),
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Post.prototype, "heure", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Legend of the post' }),
    (0, class_validator_1.IsString)(),
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Post.prototype, "legende", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'ID of the Post', example: '3fa85f64-5717-4562-b3fc-2c963f66afa6' }),
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Post.prototype, "idPost", void 0);
exports.Post = Post = __decorate([
    (0, mongoose_1.Schema)()
], Post);
exports.PostSchema = mongoose_1.SchemaFactory.createForClass(Post);
//# sourceMappingURL=post.shemas.js.map