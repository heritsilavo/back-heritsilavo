import { Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/post.dto';

@Injectable()
export class PostService {
  private posts = [];

  create(createPostDto: CreatePostDto) {
    const newPost = { id: Date.now(), ...createPostDto };
    this.posts.push(newPost);
    return newPost;
  }

  findAll() {
    return this.posts;
  }

  findOne(id: number) {
    return this.posts.find(post => post.id === id);
  }

  update(id: number, updatePostDto: Partial<CreatePostDto>) {
    const postIndex = this.posts.findIndex(post => post.id === id);
    if (postIndex === -1) {
      return null;
    }
    const updatedPost = { ...this.posts[postIndex], ...updatePostDto };
    this.posts[postIndex] = updatedPost;
    return updatedPost;
  }

  remove(id: number) {
    const postIndex = this.posts.findIndex(post => post.id === id);
    if (postIndex === -1) {
      return null;
    }
    const deletedPost = this.posts.splice(postIndex, 1);
    return deletedPost;
  }
}
