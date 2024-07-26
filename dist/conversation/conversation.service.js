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
exports.ConversationService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const conversation_schema_1 = require("./schemas/conversation.schema");
let ConversationService = class ConversationService {
    constructor(conversationModel) {
        this.conversationModel = conversationModel;
    }
    async create(createConversationDto) {
        const createdConversation = new this.conversationModel(createConversationDto);
        return createdConversation.save();
    }
    async findAll() {
        return this.conversationModel.find().exec();
    }
    async findOne(id) {
        const conversation = await this.conversationModel.findById(id).exec();
        if (!conversation) {
            throw new common_1.NotFoundException(`Conversation with ID ${id} not found`);
        }
        return conversation;
    }
    async update(id, updateConversationDto) {
        const updatedConversation = await this.conversationModel.findByIdAndUpdate(id, updateConversationDto, { new: true }).exec();
        if (!updatedConversation) {
            throw new common_1.NotFoundException(`Conversation with ID ${id} not found`);
        }
        return updatedConversation;
    }
    async remove(id) {
        const result = await this.conversationModel.findByIdAndDelete(id).exec();
        if (!result) {
            throw new common_1.NotFoundException(`Conversation with ID ${id} not found`);
        }
    }
    async checkPrivateConversationExists(senderId, receiverId) {
        const conversation = await this.conversationModel.findOne({
            is_group: false,
            participants: { $all: [senderId, receiverId] },
        }).exec();
        return conversation || false;
    }
};
exports.ConversationService = ConversationService;
exports.ConversationService = ConversationService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(conversation_schema_1.Conversation.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], ConversationService);
//# sourceMappingURL=conversation.service.js.map