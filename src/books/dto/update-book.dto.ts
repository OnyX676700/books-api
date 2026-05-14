import { ApiPropertyOptional } from '@nestjs/swagger';

export class UpdateBookDto {
  @ApiPropertyOptional({
    description: 'Titolo del libro',
    example: 'Il nome della rosa',
  })
  title?: string;

  @ApiPropertyOptional({
    description: 'Nome dell\'autore',
    example: 'Umberto Eco',
  })
  author?: string;

  @ApiPropertyOptional({
    description: 'Anno di pubblicazione',
    example: 1980,
  })
  year?: number;
}