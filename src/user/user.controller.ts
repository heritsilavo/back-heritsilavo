import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/user.dto';
import { ApiBody, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { User } from './schemas/user.shemas';

@Controller('Users')
export class UserController {
  constructor(private readonly UserService: UserService) {}
  @Get()
  @ApiOperation({ summary: 'recuperer toutes les Users' })
  @ApiResponse({ status: 201, description: 'Voici toutes les Users' })
  async getAll() {
    return this.UserService.findAll()
  }

  @Post()
  @ApiOperation({ summary: 'Créer un nouveau User' })
  @ApiResponse({ status: 201, description: 'Le User a été créé' })
  @ApiBody({type: CreateUserDto})
  async create(@Body() createUserDto: CreateUserDto) {
    return this.UserService.create(createUserDto);
  }

  // Méthode pour récupérer un User par son ID
  @Get(':id')
  @ApiOperation({ summary: 'Retrieve a User by its ID' })
  async findOne(@Param('id') id: string): Promise<User> {
    return this.UserService.findOne(id);
  }

  // Méthode pour mettre à jour un User
  @Post(':id')
  @ApiOperation({ summary: 'Update a User' })
  async update(
    @Param('id') id: string,
    @Body() updateUserDto: CreateUserDto,
  ): Promise<User> {
    return this.UserService.update(id, updateUserDto);
  }

  // Méthode pour supprimer un User
  @Delete(':id')
  @ApiOperation({ summary: 'Delete a User' })
  async delete(@Param('id') id: string): Promise<User> {
    return this.UserService.delete(id);
  }
}
