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
exports.OffreController = void 0;
const common_1 = require("@nestjs/common");
const offre_service_1 = require("./offre.service");
const offre_dto_1 = require("./dto/offre.dto");
let OffreController = class OffreController {
    constructor(offreService) {
        this.offreService = offreService;
    }
    async getAll() {
        return this.offreService.findAll();
    }
    async create(createOffreDto) {
        return this.offreService.create(createOffreDto);
    }
    async findOne(id) {
        return this.offreService.findOne(id);
    }
    async update(id, updateOffreDto) {
        return this.offreService.update(id, updateOffreDto);
    }
    async delete(id) {
        return this.offreService.delete(id);
    }
};
exports.OffreController = OffreController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], OffreController.prototype, "getAll", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [offre_dto_1.CreateOffreDto]),
    __metadata("design:returntype", Promise)
], OffreController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], OffreController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, offre_dto_1.CreateOffreDto]),
    __metadata("design:returntype", Promise)
], OffreController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], OffreController.prototype, "delete", null);
exports.OffreController = OffreController = __decorate([
    (0, common_1.Controller)('offres'),
    __metadata("design:paramtypes", [offre_service_1.OffreService])
], OffreController);
//# sourceMappingURL=offre.controller.js.map