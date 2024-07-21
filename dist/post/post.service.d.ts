import { CreatePostDto } from './dto/post.dto';
export declare class PostService {
    private posts;
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
    findOne(id: number): any;
    update(id: number, updatePostDto: Partial<CreatePostDto>): any;
    remove(id: number): any[];
}
