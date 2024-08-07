import { Injectable, NotFoundException } from '@nestjs/common';
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
    // Récupère l'utilisateur actuel pour obtenir les amis
    const user = await this.userService.findOne(userId);
    const friendsIds = user.amis;
    
    //Avec l'user id courant
    friendsIds.push(userId);

    // Récupère les posts des amis
    const posts = await this.postModel.find({ idUser: { $in: friendsIds } }).sort({ date: -1 }).exec();

    // Pour chaque post, ajoute le nom d'utilisateur de l'auteur
    const postsWithUsernames = await Promise.all(posts.map(async (post) => {
      const author = await this.userService.findOne(post.idUser);
      return {
        ...post.toObject(),
        username: author.username, // Ajoute le nom d'utilisateur
      };
    }));

    return postsWithUsernames;
  }

  async deleteAll(): Promise<void> {
    await this.postModel.deleteMany({}).exec();
  }

  async addVoter(postId: string, userId: string): Promise<Post> {
    const post = await this.postModel.findById(postId);
    if (!post) {
      throw new NotFoundException('Post not found');
    }

    if (!post.vontants.includes(userId)) {
      post.vontants.push(userId);
      post.nbrVote = post.vontants.length;
      await post.save();
    }
    return post;
  }

  async removeVoter(postId: string, userId: string): Promise<Post> {
    const post = await this.postModel.findById(postId);
    if (!post) {
      throw new NotFoundException('Post not found');
    }

    const voterIndex = post.vontants.indexOf(userId);
    if (voterIndex !== -1) {
      post.vontants.splice(voterIndex, 1);
      post.nbrVote = post.vontants.length;
      await post.save();
    }
    return post;
  }
}
