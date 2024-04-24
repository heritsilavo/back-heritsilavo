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
exports.ProjetSchema = exports.Projet = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const swagger_1 = require("@nestjs/swagger");
let Projet = class Projet {
};
exports.Projet = Projet;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Mon super projet', description: 'Le titre du projet' }),
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Projet.prototype, "title", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Ma société', description: 'La société associée au projet' }),
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Projet.prototype, "societe", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Développeur', description: 'Le rôle dans le projet' }),
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Projet.prototype, "role", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Description du projet', description: 'La description du projet' }),
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Projet.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'https://github.com/monprojet', description: 'Lien vers le dépôt Git' }),
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Projet.prototype, "git", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'https://monprojet.com/', description: 'Lien vers le site du projet' }),
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Projet.prototype, "link", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'En cours', description: 'L\'état actuel du projet' }),
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Projet.prototype, "etat", void 0);
exports.Projet = Projet = __decorate([
    (0, mongoose_1.Schema)()
], Projet);
exports.ProjetSchema = mongoose_1.SchemaFactory.createForClass(Projet);
//# sourceMappingURL=projet.shemas.js.map