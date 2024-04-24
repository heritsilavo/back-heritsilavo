import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { ProjetService } from './projet.service'; // Make sure to import your ProjetService
import { CreateProjetDto } from './dto/projet.dto';
import { ApiBody, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { Projet } from './schemas/projet.shemas'; // Make sure to import your Projet schema

@Controller('projets') // Use 'projets' instead of 'messages' for the endpoint
export class ProjetController {
  constructor(private readonly projetService: ProjetService) {}

  @Get()
  @ApiOperation({ summary: 'Retrieve all projets' })
  @ApiResponse({ status: 201, description: 'Here are all the projets' })
  async getAll(): Promise<Projet[]> {
    return this.projetService.findAll();
  }

  @Post()
  @ApiOperation({ summary: 'Create a new projet' })
  @ApiResponse({ status: 201, description: 'The projet has been created' })
  async create(@Body() createProjetDto: CreateProjetDto): Promise<Projet> {
    return this.projetService.create(createProjetDto);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Retrieve a projet by its ID' })
  async findOne(@Param('id') id: string): Promise<Projet> {
    return this.projetService.findOne(id);
  }

  @Post(':id')
  @ApiOperation({ summary: 'Update a projet' })
  async update(
    @Param('id') id: string,
    @Body() updateProjetDto: CreateProjetDto,
  ): Promise<Projet> {
    return this.projetService.update(id, updateProjetDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a projet' })
  async delete(@Param('id') id: string): Promise<Projet> {
    return this.projetService.delete(id);
  }
}
