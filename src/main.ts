import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('📚 Books API')
    .setDescription(
      '## Libreria Online — API REST\n\n' +
      'Gestisci il catalogo libri con operazioni complete di **creazione**, **lettura**, **aggiornamento** ed **eliminazione**.\n\n' +
      '> Progetto realizzato con **NestJS** e **Prisma**'
    )
    .setVersion('1.0')
    .addTag('books', 'Operazioni sul catalogo libri')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();