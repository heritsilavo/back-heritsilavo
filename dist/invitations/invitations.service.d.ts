/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
import { Model } from 'mongoose';
import { Invitation, InvitationDocument } from './schemas/invitation.schema';
import { CreateInvitationDto } from './dto/create-invitation.dto';
import { UserService } from 'src/user/user.service';
export declare class InvitationService {
    private invitationModel;
    private readonly userService;
    constructor(invitationModel: Model<InvitationDocument>, userService: UserService);
    create(createInvitationDto: CreateInvitationDto): Promise<Invitation>;
    findSentInvitations(userId: string): Promise<Invitation[]>;
    findReceivedInvitations(userId: string): Promise<any[]>;
    updateStatus(invitationId: string, status: string): Promise<Invitation>;
    delete(invitationId: string): Promise<void>;
    findOne(invitationId: string): Promise<Invitation>;
}
