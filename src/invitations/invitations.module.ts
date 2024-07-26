// src/invitations/invitation.module.ts
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Invitation, InvitationSchema } from './schemas/invitation.schema';
import { InvitationService } from './invitations.service';
import { InvitationController } from './invitations.controller';

@Module({
  imports: [MongooseModule.forFeature([{ name: Invitation.name, schema: InvitationSchema }])],
  providers: [InvitationService],
  controllers: [InvitationController],
})
export class InvitationsModule {}
