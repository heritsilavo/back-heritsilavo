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
exports.ProjetController = void 0;
const common_1 = require("@nestjs/common");
const projet_service_1 = require("./projet.service");
const projet_dto_1 = require("./dto/projet.dto");
const swagger_1 = require("@nestjs/swagger");
let ProjetController = class ProjetController {
    constructor(projetService) {
        this.projetService = projetService;
    }
    async getAll() {
        return this.projetService.findAll();
    }
    async create(createProjetDto) {
        return this.projetService.create(createProjetDto);
    }
    async findOne(id) {
        return this.projetService.findOne(id);
    }
    async update(id, updateProjetDto) {
        return this.projetService.update(id, updateProjetDto);
    }
    async delete(id) {
        return this.projetService.delete(id);
    }
};
exports.ProjetController = ProjetController;
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Retrieve all projets' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Here are all the projets' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ProjetController.prototype, "getAll", null);
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Create a new projet' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'The projet has been created' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [projet_dto_1.CreateProjetDto]),
    __metadata("design:returntype", Promise)
], ProjetController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Retrieve a projet by its ID' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ProjetController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Update a projet' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, projet_dto_1.CreateProjetDto]),
    __metadata("design:returntype", Promise)
], ProjetController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Delete a projet' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ProjetController.prototype, "delete", null);
exports.ProjetController = ProjetController = __decorate([
    (0, common_1.Controller)('projets'),
    __metadata("design:paramtypes", [projet_service_1.ProjetService])
], ProjetController);
//# sourceMappingURL=projet.controller.js.map