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
  @ApiOperation({
    summary: '📋 Lista tutti i libri',
    description: 'Restituisce l\'intero catalogo dei libri presenti nel database.',
  })
  @ApiResponse({ status: 200, description: 'Lista dei libri restituita con successo.' })
  findAll() {
    return this.booksService.findAll();
  }

  @Get(':id')
  @ApiOperation({
    summary: '🔍 Cerca un libro per ID',
    description: 'Restituisce un singolo libro corrispondente all\'ID fornito.',
  })
  @ApiParam({ name: 'id', description: 'ID del libro', example: 1 })
  @ApiResponse({ status: 200, description: 'Libro trovato.' })
  @ApiResponse({ status: 404, description: 'Libro non trovato.' })
  findOne(@Param('id') id: string) {
    return this.booksService.findOne(+id);
  }

  @Post()
  @ApiOperation({
    summary: '➕ Aggiunge un nuovo libro',
    description: 'Crea un nuovo libro nel catalogo con titolo, autore e anno di pubblicazione.',
  })
  @ApiResponse({ status: 201, description: 'Libro creato con successo.' })
  @ApiResponse({ status: 400, description: 'Dati non validi.' })
  create(@Body() body: CreateBookDto) {
    return this.booksService.create(body);
  }

  @Patch(':id')
  @ApiOperation({
    summary: '✏️ Modifica un libro esistente',
    description: 'Aggiorna uno o più campi di un libro già presente nel catalogo.',
  })
  @ApiParam({ name: 'id', description: 'ID del libro', example: 1 })
  @ApiResponse({ status: 200, description: 'Libro aggiornato con successo.' })
  @ApiResponse({ status: 404, description: 'Libro non trovato.' })
  update(@Param('id') id: string, @Body() body: UpdateBookDto) {
    return this.booksService.update(+id, body);
  }

  @Delete(':id')
  @ApiOperation({
    summary: '🗑️ Elimina un libro',
    description: 'Rimuove definitivamente un libro dal catalogo tramite il suo ID.',
  })
  @ApiParam({ name: 'id', description: 'ID del libro', example: 1 })
  @ApiResponse({ status: 200, description: 'Libro eliminato con successo.' })
  @ApiResponse({ status: 404, description: 'Libro non trovato.' })
  remove(@Param('id') id: string) {
    return this.booksService.remove(+id);
  }
}