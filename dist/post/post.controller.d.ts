import { PostService } from './post.service';
import { CreatePostDto } from './dto/post.dto';
export declare class PostController {
    private readonly postService;
    constructor(postService: PostService);
    create(createPostDto: CreatePostDto): Promise<import("./schemas/post.shemas").Post>;
    findAll(): Promise<import("./schemas/post.shemas").Post[]>;
    findOne(id: string): Promise<import("./schemas/post.shemas").Post>;
    update(id: string, updatePostDto: Partial<CreatePostDto>): Promise<import("./schemas/post.shemas").Post>;
    remove(id: string): Promise<import("./schemas/post.shemas").Post>;
    removeAll(): Promise<void>;
    findPostsByFriends(userId: string): Promise<import("./schemas/post.shemas").Post[]>;
}
