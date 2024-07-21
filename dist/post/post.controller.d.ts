import { PostService } from './post.service';
import { CreatePostDto } from './dto/post.dto';
export declare class PostController {
    private readonly postService;
    constructor(postService: PostService);
    create(createPostDto: CreatePostDto): {
        image: string;
        nbrVote: number;
        date: Date;
        heure: string;
        legende: string;
        idUser: string;
        id: number;
    };
    findAll(): any[];
    findOne(id: string): any;
    update(id: string, updatePostDto: Partial<CreatePostDto>): any;
    remove(id: string): any[];
}
