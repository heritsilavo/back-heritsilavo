import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';

//user:tsilavo // password:NN3Rfl8vYAJPQ2Ly
@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://tsilavo:NN3Rfl8vYAJPQ2Ly@heritsilavo.fbgfz9p.mongodb.net/messagerie?retryWrites=true&w=majority&appName=heritsilavo'), UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
