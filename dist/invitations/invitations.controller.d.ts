import { InvitationService } from './invitations.service';
import { CreateInvitationDto } from './dto/create-invitation.dto';
import { Invitation } from './schemas/invitation.schema';
export declare class InvitationController {
    private readonly invitationService;
    constructor(invitationService: InvitationService);
    create(createInvitationDto: CreateInvitationDto): Promise<Invitation>;
    findSentInvitations(userId: string): Promise<Invitation[]>;
    findReceivedInvitations(userId: string): Promise<Invitation[]>;
    updateStatus(invitationId: string, body: {
        status: string;
    }): Promise<Invitation>;
}
