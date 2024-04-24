import { ProjetService } from './projet.service';
import { CreateProjetDto } from './dto/projet.dto';
import { Projet } from './schemas/projet.shemas';
export declare class ProjetController {
    private readonly projetService;
    constructor(projetService: ProjetService);
    getAll(): Promise<Projet[]>;
    create(createProjetDto: CreateProjetDto): Promise<Projet>;
    findOne(id: string): Promise<Projet>;
    update(id: string, updateProjetDto: CreateProjetDto): Promise<Projet>;
    delete(id: string): Promise<Projet>;
}
