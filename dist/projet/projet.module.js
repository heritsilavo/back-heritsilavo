"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjetModule = void 0;
const common_1 = require("@nestjs/common");
const projet_controller_1 = require("./projet.controller");
const projet_service_1 = require("./projet.service");
const mongoose_1 = require("@nestjs/mongoose");
const projet_shemas_1 = require("./schemas/projet.shemas");
let ProjetModule = class ProjetModule {
};
exports.ProjetModule = ProjetModule;
exports.ProjetModule = ProjetModule = __decorate([
    (0, common_1.Module)({
        imports: [mongoose_1.MongooseModule.forFeature([{ name: projet_shemas_1.Projet.name, schema: projet_shemas_1.ProjetSchema }])],
        controllers: [projet_controller_1.ProjetController],
        providers: [projet_service_1.ProjetService]
    })
], ProjetModule);
//# sourceMappingURL=projet.module.js.map