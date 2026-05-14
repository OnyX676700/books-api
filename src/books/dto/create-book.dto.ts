import { ApiProperty } from '@nestjs/swagger';

export class CreateBookDto {
  @ApiProperty({
    description: 'Titolo del libro',
    example: 'Il nome della rosa',
  })
  title!: string;

  @ApiProperty({
    description: 'Nome dell\'autore',
    example: 'Umberto Eco',
  })
  author!: string;

  @ApiProperty({
    description: 'Anno di pubblicazione',
    example: 1980,
  })
  year!: number;
}