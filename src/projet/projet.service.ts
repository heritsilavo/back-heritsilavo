
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Projet } from './schemas/projet.shemas'; // Assurez-vous d'importer votre modèle Projet
import { CreateProjetDto } from './dto/projet.dto';

@Injectable()
export class ProjetService {
  constructor(@InjectModel(Projet.name) private readonly projetModel: Model<Projet>) {}

  async create(createProjetDto: CreateProjetDto): Promise<Projet> {
    const createdProjet = new this.projetModel(createProjetDto);
    return createdProjet.save();
  }

  async findAll(): Promise<Projet[]> {
    return this.projetModel.find().exec();
  }

  async findOne(id: string): Promise<Projet> {
    return this.projetModel.findById(id).exec();
  }

  async update(id: string, updateProjetDto: CreateProjetDto): Promise<Projet> {
    return this.projetModel.findByIdAndUpdate(id, updateProjetDto, { new: true }).exec();
  }

  async delete(id: string): Promise<Projet> {
    return this.projetModel.findByIdAndDelete(id).exec();
  }
}
