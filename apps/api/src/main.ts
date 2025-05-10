import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule } from '@nestjs/swagger';
import { createSwaggerConfig, swaggerOptions } from './config/swagger.config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  SwaggerModule.setup(
    'api-doc',
    app,
    SwaggerModule.createDocument(app, createSwaggerConfig('nextflix')),
    swaggerOptions,
  );

  const port = process.env.PORT || 3000;
  await app.listen(port);
  console.log(`🚀 App listening on port ${port}`);
}
bootstrap();
