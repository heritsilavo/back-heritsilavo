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
exports.UserController = void 0;
const common_1 = require("@nestjs/common");
const user_service_1 = require("./user.service");
const user_dto_1 = require("./dto/user.dto");
const swagger_1 = require("@nestjs/swagger");
let UserController = class UserController {
    constructor(UserService) {
        this.UserService = UserService;
    }
    async getAll() {
        return this.UserService.findAll();
    }
    async create(createUserDto) {
        return this.UserService.create(createUserDto);
    }
    async login(infos) {
        return this.UserService.login(infos);
    }
    async findOne(id) {
        return this.UserService.findOne(id);
    }
    async update(id, updateUserDto) {
        return this.UserService.update(id, updateUserDto);
    }
    async delete(id) {
        return this.UserService.delete(id);
    }
    async getFriends(id) {
        return this.UserService.getFriends(id);
    }
    async addFriend(userId, body) {
        return this.UserService.addFriend(userId, body.friendId);
    }
};
exports.UserController = UserController;
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'recuperer toutes les Users' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Voici toutes les Users' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UserController.prototype, "getAll", null);
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Créer un nouveau User' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Le User a été créé' }),
    (0, swagger_1.ApiBody)({ type: user_dto_1.CreateUserDto }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_dto_1.CreateUserDto]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "create", null);
__decorate([
    (0, common_1.Post)('/login'),
    (0, swagger_1.ApiOperation)({ summary: 'Se connecter' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Connecté' }),
    (0, swagger_1.ApiBody)({
        schema: {
            type: 'object',
            properties: {
                username: { type: 'string' },
                mdp: { type: 'string' },
            },
            required: ['username', 'mdp'],
        },
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "login", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Retrieve a User by its ID' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Update a User' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, user_dto_1.CreateUserDto]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Delete a User' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "delete", null);
__decorate([
    (0, common_1.Get)(':id/friends'),
    (0, swagger_1.ApiOperation)({ summary: 'Récupérer la liste des amis d\'un utilisateur' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Liste des amis récupérée avec succès' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "getFriends", null);
__decorate([
    (0, common_1.Post)(':id/friends'),
    (0, swagger_1.ApiOperation)({ summary: 'Ajouter un ami à un utilisateur' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Ami ajouté avec succès' }),
    (0, swagger_1.ApiBody)({
        schema: {
            type: 'object',
            properties: {
                friendId: { type: 'string' },
            },
            required: ['friendId'],
        },
    }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "addFriend", null);
exports.UserController = UserController = __decorate([
    (0, common_1.Controller)('Users'),
    __metadata("design:paramtypes", [user_service_1.UserService])
], UserController);
//# sourceMappingURL=user.controller.js.map