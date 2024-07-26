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
exports.ConversationController = void 0;
const common_1 = require("@nestjs/common");
const conversation_service_1 = require("./conversation.service");
const create_conversation_dto_1 = require("./dto/create-conversation.dto");
const update_conversation_dto_1 = require("./dto/update-conversation.dto");
const conversation_schema_1 = require("./schemas/conversation.schema");
const swagger_1 = require("@nestjs/swagger");
let ConversationController = class ConversationController {
    constructor(conversationService) {
        this.conversationService = conversationService;
    }
    create(createConversationDto) {
        return this.conversationService.create(createConversationDto);
    }
    findAll() {
        return this.conversationService.findAll();
    }
    findOne(id) {
        return this.conversationService.findOne(id);
    }
    update(id, updateConversationDto) {
        return this.conversationService.update(id, updateConversationDto);
    }
    remove(id) {
        return this.conversationService.remove(id);
    }
    checkPrivateConversationExists({ sender, receiver }) {
        return this.conversationService.checkPrivateConversationExists(sender, receiver);
    }
    getConversationName(idCurrentUser, idConversation) {
        return this.conversationService.getConversationName({ idCurrentUser: idCurrentUser, idConversation: idConversation });
    }
    async getConversationsByUser(idUser) {
        const conversations = await this.conversationService.getConversationsByUser(idUser);
        return conversations;
    }
};
exports.ConversationController = ConversationController;
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Create a new conversation' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'The conversation has been successfully created.', type: conversation_schema_1.Conversation }),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_conversation_dto_1.CreateConversationDto]),
    __metadata("design:returntype", Promise)
], ConversationController.prototype, "create", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Get all conversations' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Return all conversations.', type: [conversation_schema_1.Conversation] }),
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ConversationController.prototype, "findAll", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Get a conversation by ID' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'ID of the conversation to retrieve' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Return the conversation.', type: conversation_schema_1.Conversation }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Conversation not found' }),
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ConversationController.prototype, "findOne", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Update a conversation by ID' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'ID of the conversation to update' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'The conversation has been successfully updated.', type: conversation_schema_1.Conversation }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Conversation not found' }),
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_conversation_dto_1.UpdateConversationDto]),
    __metadata("design:returntype", Promise)
], ConversationController.prototype, "update", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Delete a conversation by ID' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'ID of the conversation to delete' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'The conversation has been successfully deleted.' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Conversation not found' }),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ConversationController.prototype, "remove", null);
__decorate([
    (0, common_1.Post)('/checkPrivateConversationExists'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ConversationController.prototype, "checkPrivateConversationExists", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Get a conversation by ID' }),
    (0, swagger_1.ApiParam)({ name: 'idCurrentUser', description: '' }),
    (0, swagger_1.ApiParam)({ name: 'idConversation', description: '' }),
    (0, common_1.Get)('getConversationName/:idCurrentUser/:idConversation'),
    __param(0, (0, common_1.Param)('idCurrentUser')),
    __param(1, (0, common_1.Param)('idConversation')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], ConversationController.prototype, "getConversationName", null);
__decorate([
    (0, swagger_1.ApiParam)({ name: 'idUser', description: 'id de l\'user' }),
    (0, common_1.Get)('user/:idUser'),
    __param(0, (0, common_1.Param)('idUser')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ConversationController.prototype, "getConversationsByUser", null);
exports.ConversationController = ConversationController = __decorate([
    (0, swagger_1.ApiTags)('conversations'),
    (0, common_1.Controller)('conversations'),
    __metadata("design:paramtypes", [conversation_service_1.ConversationService])
], ConversationController);
//# sourceMappingURL=conversation.controller.js.map