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
const user_service_1 = require("../user/user.service");
const message_service_1 = require("../message/message.service");
let ConversationService = class ConversationService {
    constructor(conversationModel, userService, messageService) {
        this.conversationModel = conversationModel;
        this.userService = userService;
        this.messageService = messageService;
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
    async getConversationName({ idCurrentUser, idConversation }) {
        const conversation = await this.conversationModel.findById(idConversation).exec();
        if (!conversation) {
            throw new common_1.NotFoundException(`Conversation with ID ${idConversation} not found`);
        }
        if (conversation.is_group) {
            return conversation.name || 'Unnamed';
        }
        const otherParticipantId = conversation.participants.find(participant => participant !== idCurrentUser);
        if (!otherParticipantId) {
            throw new common_1.NotFoundException('Other participant not found');
        }
        const otherParticipant = await this.userService.findOne(otherParticipantId.toString());
        return otherParticipant.username;
    }
    async getConversationImage({ idCurrentUser, idConversation }) {
        const conversation = await this.conversationModel.findById(idConversation).exec();
        if (!conversation) {
            throw new common_1.NotFoundException(`Conversation with ID ${idConversation} not found`);
        }
        if (conversation.is_group) {
            return 'profile.png';
        }
        const otherParticipantId = conversation.participants.find(participant => participant !== idCurrentUser);
        if (!otherParticipantId) {
            throw new common_1.NotFoundException('Other participant not found');
        }
        const otherParticipant = await this.userService.findOne(otherParticipantId.toString());
        return otherParticipant.pdp;
    }
    async getConversationsByUser(userId, is_group) {
        const conversations = await this.conversationModel.find({ participants: userId, is_group }).exec();
        const conversationsWithDetails = await Promise.all(conversations.map(async (conversation) => {
            const name = await this.getConversationName({ idCurrentUser: userId, idConversation: conversation._id });
            const image = (conversation.is_group) ? (await this.getConversationImage({ idCurrentUser: userId, idConversation: conversation._id })) : conversation.image;
            const lastMessage = await this.messageService.getLastMessage(conversation._id);
            console.log(lastMessage?.timestamp);
            return {
                ...conversation.toObject(),
                name,
                image,
                lastMessage: lastMessage ? lastMessage.content : "",
                lastMessageTime: lastMessage ? lastMessage.timestamp.toLocaleTimeString() : ""
            };
        }));
        return conversationsWithDetails;
    }
    formatDate(date) {
        const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        const day = date.getDate();
        const month = months[date.getMonth()];
        const year = date.getFullYear();
        const hours = date.getHours().toString().padStart(2, '0');
        const minutes = date.getMinutes().toString().padStart(2, '0');
        return `${day} ${month} ${year},${hours}:${minutes}`;
    }
};
exports.ConversationService = ConversationService;
exports.ConversationService = ConversationService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(conversation_schema_1.Conversation.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        user_service_1.UserService,
        message_service_1.MessageService])
], ConversationService);
//# sourceMappingURL=conversation.service.js.map