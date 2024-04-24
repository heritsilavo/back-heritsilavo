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
exports.OffreSchema = exports.Offre = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const swagger_1 = require("@nestjs/swagger");
let Offre = class Offre {
};
exports.Offre = Offre;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Plateforme de recrutement', description: 'Le titre de l\'offre' }),
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Offre.prototype, "title", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'webdevin', description: 'La société associée à l\'offre' }),
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Offre.prototype, "client", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'john.doe@example.com', description: 'Le contact pour l\'offre' }),
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Offre.prototype, "contact", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '2024-04-18T21:10:53.000Z', description: 'La date de l\'offre' }),
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Date)
], Offre.prototype, "date", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Description de l\'offre', description: 'La description de l\'offre' }),
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Offre.prototype, "description", void 0);
exports.Offre = Offre = __decorate([
    (0, mongoose_1.Schema)()
], Offre);
exports.OffreSchema = mongoose_1.SchemaFactory.createForClass(Offre);
//# sourceMappingURL=offre.shemas.js.map