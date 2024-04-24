import { Module } from '@nestjs/common';
import { OffreController } from './offre.controller';
import { OffreService } from './offre.service';
import { Offre, OffreSchema } from './schemas/offre.shemas';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports:[MongooseModule.forFeature([{name:Offre.name,schema:OffreSchema}])],
  controllers: [OffreController],
  providers: [OffreService]
})
export class OffreModule {}
