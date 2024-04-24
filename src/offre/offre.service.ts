// offre.service.ts

import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Offre } from './schemas/offre.shemas';// Make sure to import your Offre model
import { CreateOffreDto } from './dto/offre.dto';

@Injectable()
export class OffreService {
  constructor(@InjectModel(Offre.name) private readonly offreModel: Model<Offre>) {}

  async create(createOffreDto: CreateOffreDto): Promise<Offre> {
    const createdOffre = new this.offreModel(createOffreDto);
    return createdOffre.save();
  }

  async findAll(): Promise<Offre[]> {
    return this.offreModel.find().exec();
  }

  async findOne(id: string): Promise<Offre> {
    return this.offreModel.findById(id).exec();
  }

  async update(id: string, updateOffreDto: CreateOffreDto): Promise<Offre> {
    return this.offreModel.findByIdAndUpdate(id, updateOffreDto, { new: true }).exec();
  }

  async delete(id: string): Promise<Offre> {
    return this.offreModel.findByIdAndDelete(id).exec();
  }
}
