import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Post, PostDocument } from './schemas/post.shemas';
import { CreatePostDto } from './dto/post.dto';
import { UserService } from '../user/user.service';

@Injectable()
export class PostService {
  constructor(
    @InjectModel(Post.name) private postModel: Model<PostDocument>,
    private readonly userService: UserService,
  ) {}

  async create(createPostDto: CreatePostDto): Promise<Post> {
    const newPost = new this.postModel(createPostDto);
    return newPost.save();
  }

  async findAll(): Promise<Post[]> {
    return this.postModel.find().exec();
  }

  async findOne(id: string): Promise<Post> {
    return this.postModel.findById(id).exec();
  }

  async update(id: string, updatePostDto: Partial<CreatePostDto>): Promise<Post> {
    return this.postModel.findByIdAndUpdate(id, updatePostDto, { new: true }).exec();
  }

  async remove(id: string): Promise<Post> {
    return this.postModel.findByIdAndDelete(id).exec();
  }

  async findPostsByFriends(userId: string): Promise<Post[]> {
    const user = await this.userService.findOne(userId);
    const friendsIds = user.amis;

    return this.postModel.find({ idUser: { $in: friendsIds } }).sort({ date: -1 }).exec();
  }

  async deleteAll(): Promise<void> {
    await this.postModel.deleteMany({}).exec();
  }
}
