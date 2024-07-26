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
const create_message_dto_1 = require("./dto/create-message.dto");
const update_message_dto_1 = require("./dto/update-message.dto");
const message_schema_1 = require("./schemas/message.schema");
const swagger_1 = require("@nestjs/swagger");
let MessageController = class MessageController {
    constructor(messageService) {
        this.messageService = messageService;
    }
    create(createMessageDto) {
        return this.messageService.create(createMessageDto);
    }
    findAll() {
        return this.messageService.findAll();
    }
    findOne(id) {
        return this.messageService.findOne(id);
    }
    update(id, updateMessageDto) {
        return this.messageService.update(id, updateMessageDto);
    }
    remove(id) {
        return this.messageService.remove(id);
    }
    findMessagesByConv(idConversation) {
        return this.messageService.getMessagesByConversation(idConversation);
    }
};
exports.MessageController = MessageController;
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Create a new message' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'The message has been successfully created.', type: message_schema_1.Message }),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_message_dto_1.CreateMessageDto]),
    __metadata("design:returntype", Promise)
], MessageController.prototype, "create", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Get all messages' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Return all messages.', type: [message_schema_1.Message] }),
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], MessageController.prototype, "findAll", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Get a message by ID' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'ID of the message to retrieve' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Return the message.', type: message_schema_1.Message }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Message not found' }),
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], MessageController.prototype, "findOne", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Update a message by ID' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'ID of the message to update' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'The message has been successfully updated.', type: message_schema_1.Message }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Message not found' }),
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_message_dto_1.UpdateMessageDto]),
    __metadata("design:returntype", Promise)
], MessageController.prototype, "update", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Delete a message by ID' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'ID of the message to delete' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'The message has been successfully deleted.' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Message not found' }),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], MessageController.prototype, "remove", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Get all messages by id conv' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Return all messages.', type: [message_schema_1.Message] }),
    (0, common_1.Get)('findMessagesByConv/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], MessageController.prototype, "findMessagesByConv", null);
exports.MessageController = MessageController = __decorate([
    (0, swagger_1.ApiTags)('messages'),
    (0, common_1.Controller)('messages'),
    __metadata("design:paramtypes", [message_service_1.MessageService])
], MessageController);
//# sourceMappingURL=message.controller.js.map