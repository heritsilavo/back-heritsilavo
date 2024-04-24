"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OffreModule = void 0;
const common_1 = require("@nestjs/common");
const offre_controller_1 = require("./offre.controller");
const offre_service_1 = require("./offre.service");
const offre_shemas_1 = require("./schemas/offre.shemas");
const mongoose_1 = require("@nestjs/mongoose");
let OffreModule = class OffreModule {
};
exports.OffreModule = OffreModule;
exports.OffreModule = OffreModule = __decorate([
    (0, common_1.Module)({
        imports: [mongoose_1.MongooseModule.forFeature([{ name: offre_shemas_1.Offre.name, schema: offre_shemas_1.OffreSchema }])],
        controllers: [offre_controller_1.OffreController],
        providers: [offre_service_1.OffreService]
    })
], OffreModule);
//# sourceMappingURL=offre.module.js.map