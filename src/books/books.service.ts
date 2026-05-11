import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class BooksService {
  constructor(private readonly prisma: PrismaService) {}

  findAll() {
    return this.prisma.book.findMany();
  }

  findOne(id: number) {
    return this.prisma.book.findUnique({
      where: { id },
    });
  }

  create(data: { title: string; author: string; year: number }) {
    return this.prisma.book.create({ data });
  }

  update(id: number, data: { title?: string; author?: string; year?: number }) {
    return this.prisma.book.update({
      where: { id },
      data,
    });
  }

  remove(id: number) {
    return this.prisma.book.delete({
      where: { id },
    });
  }
}