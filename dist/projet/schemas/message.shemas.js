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
exports.MessageSchema = exports.Message = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const swagger_1 = require("@nestjs/swagger");
let Message = class Message {
};
exports.Message = Message;
__decorate([
    (0, swagger_1.ApiProperty)({ example: '2024-04-18T21:10:53.000Z', description: 'La date du message' }),
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Date)
], Message.prototype, "date", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'inconnu', description: 'celui qui envoi le message' }),
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Message.prototype, "auteur", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Contenu du message', description: 'Le contenu du message' }),
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Message.prototype, "contenu", void 0);
exports.Message = Message = __decorate([
    (0, mongoose_1.Schema)()
], Message);
exports.MessageSchema = mongoose_1.SchemaFactory.createForClass(Message);
//# sourceMappingURL=message.shemas.js.map