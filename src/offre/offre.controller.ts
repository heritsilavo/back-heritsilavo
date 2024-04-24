// offre.controller.ts

import { Controller, Get, Post, Body, Param, Patch, Delete } from '@nestjs/common';
import { OffreService } from './offre.service'; // Make sure to import your OffreService
import { CreateOffreDto } from './dto/offre.dto';
import { Offre } from './schemas/offre.shemas'; // Make sure to import your Offre schema

@Controller('offres')
export class OffreController {
  constructor(private readonly offreService: OffreService) {}

  @Get()
  async getAll(): Promise<Offre[]> {
    return this.offreService.findAll();
  }

  @Post()
  async create(@Body() createOffreDto: CreateOffreDto): Promise<Offre> {
    return this.offreService.create(createOffreDto);
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Offre> {
    return this.offreService.findOne(id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateOffreDto: CreateOffreDto): Promise<Offre> {
    return this.offreService.update(id, updateOffreDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<Offre> {
    return this.offreService.delete(id);
  }
}
