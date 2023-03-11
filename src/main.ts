import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { URL } from 'url';
import { ValidationPipe } from '@nestjs/common';

export const dbUrl = new URL(process.env.DATABASE_URL);
export const routingId = dbUrl.searchParams.get("options");
dbUrl.searchParams.delete("options");

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,
    transform: true,
  }))
  await app.listen(process.env.PORT).then(() => {
    console.log(process.env.DATABASE_URL);
    console.log(`Application is listening on ${process.env.PORT} port!`)
  });
}
bootstrap();
