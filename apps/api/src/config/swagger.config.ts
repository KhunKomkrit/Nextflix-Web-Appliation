import { DocumentBuilder } from '@nestjs/swagger';

export function createSwaggerConfig(title = 'API') {
  return new DocumentBuilder()
    .setTitle(title)
    .setDescription('Auto-generated Swagger docs')
    .setVersion('1.0')
    .build();
}

export const swaggerOptions = {
  explorer: true,
  swaggerOptions: {
    urls: [
      {
        name: 'API Version 1',
        url: 'nextflix/json',
      },
    ],
  },
  jsonDocumentUrl: 'nextflix/json',
};
