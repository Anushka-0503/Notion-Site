import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(5003).then(()=> console.log('App is listening on port 5003'));
}
bootstrap();
