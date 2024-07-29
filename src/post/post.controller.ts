import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { PostService } from './post.service';
import { CreatePostDto } from './dto/post.dto';
import { ApiTags, ApiOperation, ApiResponse, ApiParam, ApiBody } from '@nestjs/swagger';

@ApiTags('posts')
@Controller('posts')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @ApiOperation({ summary: 'Create a new post' })
  @ApiResponse({ status: 201, description: 'The post has been successfully created.' })
  @ApiBody({ 
    type: CreatePostDto,
    examples: {
      'application/json': {
        summary: 'Example of a post creation request',
        value: {
          image: 'http://example.com/image.jpg',
          nbrVote: 10,
          date: '2024-07-29T12:34:56.789Z',
          heure: '14:00',
          legende: 'A beautiful sunset',
          idUser: '60b8d295f8b6c6a12c8d4e44'
        }
      }
    }
  })
  @Post()
  create(@Body() createPostDto: CreatePostDto) {
    return this.postService.create(createPostDto);
  }

  @ApiOperation({ summary: 'Get all posts' })
  @ApiResponse({ status: 200, description: 'Return all posts.' })
  @Get()
  findAll() {
    return this.postService.findAll();
  }

  @ApiOperation({ summary: 'Get a post by ID' })
  @ApiParam({ name: 'id', description: 'ID of the post to retrieve' })
  @ApiResponse({ status: 200, description: 'Return the post.' })
  @ApiResponse({ status: 404, description: 'Post not found' })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.postService.findOne(id);
  }

  @ApiOperation({ summary: 'Update a post by ID' })
  @ApiParam({ name: 'id', description: 'ID of the post to update' })
  @ApiBody({ 
    type: CreatePostDto,
    description: 'Updated post data',
    examples: {
      'application/json': {
        summary: 'Example of a post update request',
        value: {
          image: 'http://example.com/updated-image.jpg',
          nbrVote: 20,
          date: '2024-07-30T12:34:56.789Z',
          heure: '16:00',
          legende: 'An updated beautiful sunset',
          idUser: '60b8d295f8b6c6a12c8d4e44'
        }
      }
    }
  })
  @ApiResponse({ status: 200, description: 'The post has been successfully updated.' })
  @ApiResponse({ status: 404, description: 'Post not found' })
  @Put(':id')
  update(@Param('id') id: string, @Body() updatePostDto: Partial<CreatePostDto>) {
    return this.postService.update(id, updatePostDto);
  }

  @ApiOperation({ summary: 'Delete a post by ID' })
  @ApiParam({ name: 'id', description: 'ID of the post to delete' })
  @ApiResponse({ status: 200, description: 'The post has been successfully deleted.' })
  @ApiResponse({ status: 404, description: 'Post not found' })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.postService.remove(id);
  }

  @ApiOperation({ summary: 'Get posts from friends, sorted by most recent' })
  @ApiParam({ name: 'userId', description: 'ID of the user to retrieve friends\' posts for' })
  @ApiResponse({ status: 200, description: 'Return posts from friends sorted by most recent' })
  @Get('friends/:userId')
  findPostsByFriends(@Param('userId') userId: string) {
    return this.postService.findPostsByFriends(userId);
  }
}
