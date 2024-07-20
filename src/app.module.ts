import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MessageModule } from './message/message.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ProjetModule } from './projet/projet.module';
import { OffreModule } from './offre/offre.module';
import { UserModule } from './user/user.module';

//user:tsilavo // password:NN3Rfl8vYAJPQ2Ly
@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://tsilavo:NN3Rfl8vYAJPQ2Ly@heritsilavo.fbgfz9p.mongodb.net/messagerie?retryWrites=true&w=majority&appName=heritsilavo'), MessageModule, ProjetModule, OffreModule, UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
