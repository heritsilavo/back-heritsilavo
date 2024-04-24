import { OffreService } from './offre.service';
import { CreateOffreDto } from './dto/offre.dto';
import { Offre } from './schemas/offre.shemas';
export declare class OffreController {
    private readonly offreService;
    constructor(offreService: OffreService);
    getAll(): Promise<Offre[]>;
    create(createOffreDto: CreateOffreDto): Promise<Offre>;
    findOne(id: string): Promise<Offre>;
    update(id: string, updateOffreDto: CreateOffreDto): Promise<Offre>;
    delete(id: string): Promise<Offre>;
}
