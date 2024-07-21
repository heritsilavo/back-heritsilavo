import { Module } from '@nestjs/common';
import { FichierController } from './fichier.controller';

@Module({
  controllers: [FichierController]
})
export class FichierModule {}
