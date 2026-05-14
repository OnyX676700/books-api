import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiParam } from '@nestjs/swagger';
import { BooksService } from './books.service';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';

@ApiTags('books')
@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Get()
  @ApiOperation({ summary: 'Restituisce tutti i libri' })
  @ApiResponse({ status: 200, description: 'Lista dei libri restituita con successo.' })
  findAll() {
    return this.booksService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Restituisce un libro tramite ID' })
  @ApiParam({ name: 'id', description: 'ID del libro', example: 1 })
  @ApiResponse({ status: 200, description: 'Libro trovato.' })
  @ApiResponse({ status: 404, description: 'Libro non trovato.' })
  findOne(@Param('id') id: string) {
    return this.booksService.findOne(+id);
  }

  @Post()
  @ApiOperation({ summary: 'Crea un nuovo libro' })
  @ApiResponse({ status: 201, description: 'Libro creato con successo.' })
  @ApiResponse({ status: 400, description: 'Dati non validi.' })
  create(@Body() body: CreateBookDto) {
    return this.booksService.create(body);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Aggiorna un libro esistente' })
  @ApiParam({ name: 'id', description: 'ID del libro', example: 1 })
  @ApiResponse({ status: 200, description: 'Libro aggiornato con successo.' })
  @ApiResponse({ status: 404, description: 'Libro non trovato.' })
  update(@Param('id') id: string, @Body() body: UpdateBookDto) {
    return this.booksService.update(+id, body);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Elimina un libro' })
  @ApiParam({ name: 'id', description: 'ID del libro', example: 1 })
  @ApiResponse({ status: 200, description: 'Libro eliminato con successo.' })
  @ApiResponse({ status: 404, description: 'Libro non trovato.' })
  remove(@Param('id') id: string) {
    return this.booksService.remove(+id);
  }
}