// src/invitations/invitation.module.ts
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Invitation, InvitationSchema } from './schemas/invitation.schema';
import { InvitationService } from './invitations.service';
import { InvitationController } from './invitations.controller';
import { UserModule } from 'src/user/user.module';
import { UserService } from 'src/user/user.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: Invitation.name, schema: InvitationSchema }]),UserModule],
  providers: [InvitationService],
  controllers: [InvitationController],
})
export class InvitationsModule {}
