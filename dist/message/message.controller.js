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
exports.MessageController = void 0;
const common_1 = require("@nestjs/common");
const message_service_1 = require("./message.service");
const message_dto_1 = require("./dto/message.dto");
const swagger_1 = require("@nestjs/swagger");
let MessageController = class MessageController {
    constructor(messageService) {
        this.messageService = messageService;
    }
    async getAll() {
        return this.messageService.findAll();
    }
    async create(createMessageDto) {
        return this.messageService.create(createMessageDto);
    }
    async findOne(id) {
        return this.messageService.findOne(id);
    }
    async update(id, updateMessageDto) {
        return this.messageService.update(id, updateMessageDto);
    }
    async delete(id) {
        return this.messageService.delete(id);
    }
};
exports.MessageController = MessageController;
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'recuperer toutes les messages' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Voici toutes les messages' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], MessageController.prototype, "getAll", null);
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Créer un nouveau message' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Le message a été créé' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [message_dto_1.CreateMessageDto]),
    __metadata("design:returntype", Promise)
], MessageController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Retrieve a message by its ID' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], MessageController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Update a message' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, message_dto_1.CreateMessageDto]),
    __metadata("design:returntype", Promise)
], MessageController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Delete a message' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], MessageController.prototype, "delete", null);
exports.MessageController = MessageController = __decorate([
    (0, common_1.Controller)('messages'),
    __metadata("design:paramtypes", [message_service_1.MessageService])
], MessageController);
//# sourceMappingURL=message.controller.js.map