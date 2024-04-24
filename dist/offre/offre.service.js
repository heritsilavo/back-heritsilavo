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
exports.OffreService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const offre_shemas_1 = require("./schemas/offre.shemas");
let OffreService = class OffreService {
    constructor(offreModel) {
        this.offreModel = offreModel;
    }
    async create(createOffreDto) {
        const createdOffre = new this.offreModel(createOffreDto);
        return createdOffre.save();
    }
    async findAll() {
        return this.offreModel.find().exec();
    }
    async findOne(id) {
        return this.offreModel.findById(id).exec();
    }
    async update(id, updateOffreDto) {
        return this.offreModel.findByIdAndUpdate(id, updateOffreDto, { new: true }).exec();
    }
    async delete(id) {
        return this.offreModel.findByIdAndDelete(id).exec();
    }
};
exports.OffreService = OffreService;
exports.OffreService = OffreService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(offre_shemas_1.Offre.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], OffreService);
//# sourceMappingURL=offre.service.js.map