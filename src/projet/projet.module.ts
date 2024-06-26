import { Module } from '@nestjs/common';
import { ProjetController } from './projet.controller';
import { ProjetService } from './projet.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Projet, ProjetSchema } from './schemas/projet.shemas';

@Module({
  imports:[MongooseModule.forFeature([{name:Projet.name,schema:ProjetSchema}])],
  controllers: [ProjetController],
  providers: [ProjetService]
})
export class ProjetModule {}
