import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MessageModule } from './message/message.module';
import { MongooseModule } from '@nestjs/mongoose';

//user:tsilavo // password:La06l7iNMwlWuuWX
@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://tsilavo:La06l7iNMwlWuuWX@heritsilavo.fbgfz9p.mongodb.net/portfolio?retryWrites=true&w=majority&appName=heritsilavo'), MessageModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
