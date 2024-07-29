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
exports.InvitationController = void 0;
const common_1 = require("@nestjs/common");
const invitations_service_1 = require("./invitations.service");
const create_invitation_dto_1 = require("./dto/create-invitation.dto");
const swagger_1 = require("@nestjs/swagger");
const user_service_1 = require("../user/user.service");
let InvitationController = class InvitationController {
    constructor(invitationService, usersService) {
        this.invitationService = invitationService;
        this.usersService = usersService;
    }
    async create(createInvitationDto) {
        return this.invitationService.create(createInvitationDto);
    }
    async findSentInvitations(userId) {
        return this.invitationService.findSentInvitations(userId);
    }
    async findReceivedInvitations(userId) {
        return this.invitationService.findReceivedInvitations(userId);
    }
    async updateStatus(invitationId, body) {
        return this.invitationService.updateStatus(invitationId, body.status);
    }
    async acceptInvitation(invitationId) {
        try {
            const invitation = await this.invitationService.findOne(invitationId);
            if (!invitation) {
                throw new common_1.HttpException('Invitation not found', common_1.HttpStatus.NOT_FOUND);
            }
            await this.usersService.addFriend(invitation.senderId, invitation.receiverId);
            await this.usersService.addFriend(invitation.receiverId, invitation.senderId);
            await this.invitationService.delete(invitationId);
            return { message: 'Invitation accepted' };
        }
        catch (error) {
            throw new common_1.HttpException('Could not accept invitation', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async supprimerInvitation(invitationId) {
        try {
            const invitation = await this.invitationService.findOne(invitationId);
            if (!invitation) {
                throw new common_1.HttpException('Invitation not found', common_1.HttpStatus.NOT_FOUND);
            }
            await this.invitationService.delete(invitationId);
            return { message: 'Invitation supprimée' };
        }
        catch (error) {
            throw new common_1.HttpException('Could not accept invitation', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
};
exports.InvitationController = InvitationController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Créer une nouvelle invitation' }),
    (0, swagger_1.ApiBody)({ type: create_invitation_dto_1.CreateInvitationDto }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Invitation créée avec succès' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_invitation_dto_1.CreateInvitationDto]),
    __metadata("design:returntype", Promise)
], InvitationController.prototype, "create", null);
__decorate([
    (0, common_1.Get)('sent/:userId'),
    (0, swagger_1.ApiOperation)({ summary: 'Récupérer les invitations envoyées par un utilisateur' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Liste des invitations envoyées récupérée avec succès' }),
    __param(0, (0, common_1.Param)('userId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], InvitationController.prototype, "findSentInvitations", null);
__decorate([
    (0, common_1.Get)('received/:userId'),
    (0, swagger_1.ApiOperation)({ summary: 'Récupérer les invitations reçues par un utilisateur' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Liste des invitations reçues récupérée avec succès' }),
    __param(0, (0, common_1.Param)('userId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], InvitationController.prototype, "findReceivedInvitations", null);
__decorate([
    (0, common_1.Patch)(':invitationId'),
    (0, swagger_1.ApiOperation)({ summary: 'Mettre à jour le statut d\'une invitation' }),
    (0, swagger_1.ApiBody)({
        schema: {
            type: 'object',
            properties: {
                status: { type: 'string', enum: ['accepted', 'rejected'] },
            },
            required: ['status'],
        },
    }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Statut de l\'invitation mis à jour avec succès' }),
    __param(0, (0, common_1.Param)('invitationId')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], InvitationController.prototype, "updateStatus", null);
__decorate([
    (0, common_1.Patch)('accept/:invitationId'),
    __param(0, (0, common_1.Param)('invitationId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], InvitationController.prototype, "acceptInvitation", null);
__decorate([
    (0, common_1.Patch)('supprimer/:invitationId'),
    __param(0, (0, common_1.Param)('invitationId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], InvitationController.prototype, "supprimerInvitation", null);
exports.InvitationController = InvitationController = __decorate([
    (0, common_1.Controller)('invitations'),
    __metadata("design:paramtypes", [invitations_service_1.InvitationService, user_service_1.UserService])
], InvitationController);
//# sourceMappingURL=invitations.controller.js.map