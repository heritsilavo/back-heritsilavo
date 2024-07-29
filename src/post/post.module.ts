import { Module } from '@nestjs/common';
import { PostController } from './post.controller';
import { PostService } from './post.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from 'src/user/user.module';
import { Conversation, ConversationSchema } from 'src/conversation/schemas/conversation.schema';
import { Post, PostSchema } from './schemas/post.shemas';

@Module({
  imports:[MongooseModule.forFeature([{ name: Post.name, schema: PostSchema }]),UserModule],
  controllers: [PostController],
  providers: [PostService]
})
export class PostModule {}