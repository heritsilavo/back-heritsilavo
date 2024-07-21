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
exports.UpdateMessageDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_message_dto_1 = require("./create-message.dto");
const swagger_1 = require("@nestjs/swagger");
class UpdateMessageDto extends (0, mapped_types_1.PartialType)(create_message_dto_1.CreateMessageDto) {
}
exports.UpdateMessageDto = UpdateMessageDto;
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'ID of the conversation' }),
    __metadata("design:type", String)
], UpdateMessageDto.prototype, "conversation_id", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'ID of the sender' }),
    __metadata("design:type", String)
], UpdateMessageDto.prototype, "sender_id", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Content of the message' }),
    __metadata("design:type", String)
], UpdateMessageDto.prototype, "content", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Timestamp of the message' }),
    __metadata("design:type", Date)
], UpdateMessageDto.prototype, "timestamp", void 0);
//# sourceMappingURL=update-message.dto.js.map