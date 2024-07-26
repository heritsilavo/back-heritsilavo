import { InvitationService } from './invitations.service';
import { CreateInvitationDto } from './dto/create-invitation.dto';
import { Invitation } from './schemas/invitation.schema';
import { UserService } from 'src/user/user.service';
export declare class InvitationController {
    private readonly invitationService;
    private readonly usersService;
    constructor(invitationService: InvitationService, usersService: UserService);
    create(createInvitationDto: CreateInvitationDto): Promise<Invitation>;
    findSentInvitations(userId: string): Promise<Invitation[]>;
    findReceivedInvitations(userId: string): Promise<Invitation[]>;
    updateStatus(invitationId: string, body: {
        status: string;
    }): Promise<Invitation>;
    acceptInvitation(invitationId: string): Promise<{
        message: string;
    }>;
}
