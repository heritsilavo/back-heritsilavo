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
exports.ProjetService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const projet_shemas_1 = require("./schemas/projet.shemas");
let ProjetService = class ProjetService {
    constructor(projetModel) {
        this.projetModel = projetModel;
    }
    async create(createProjetDto) {
        const createdProjet = new this.projetModel(createProjetDto);
        return createdProjet.save();
    }
    async findAll() {
        return this.projetModel.find().exec();
    }
    async findOne(id) {
        return this.projetModel.findById(id).exec();
    }
    async update(id, updateProjetDto) {
        return this.projetModel.findByIdAndUpdate(id, updateProjetDto, { new: true }).exec();
    }
    async delete(id) {
        return this.projetModel.findByIdAndDelete(id).exec();
    }
};
exports.ProjetService = ProjetService;
exports.ProjetService = ProjetService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(projet_shemas_1.Projet.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], ProjetService);
//# sourceMappingURL=projet.service.js.map