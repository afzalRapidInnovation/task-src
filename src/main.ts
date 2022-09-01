import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // app.useGlobalPipes(new ValidationPipe());
  // console.log('Checking after validation pipe')

  await app.listen(3000, () => {
    console.log(`Server running on port : 3000`);
  });
}
bootstrap();
