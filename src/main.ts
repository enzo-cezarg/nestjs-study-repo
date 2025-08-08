import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  /* 
  ValidationPipe() { 
    whitelist: Ignora campos que não estão marcados no DTO;
    forbidNonWhitelisted: Devolve um Bad Request se algum atributo não estiver na whitelist;
    transform: Converte os tipos dos parâmetros para os tipos declarados no DTO;
  }
  */

  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,
    forbidNonWhitelisted: true,
    transform: true,
  }));
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
