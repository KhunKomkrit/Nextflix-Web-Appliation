import { DocumentBuilder } from '@nestjs/swagger';

export function createSwaggerConfig(title = 'API') {
  return new DocumentBuilder()
    .setTitle(title)
    .setDescription('Auto-generated Swagger docs')
    .setVersion('1.0')
    .addBearerAuth()
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
    tagsSorter: (a, b) => {
      const order = ['Auth', 'Movie'];
      return order.indexOf(a) - order.indexOf(b);
    },
  },
  jsonDocumentUrl: 'nextflix/json',
};
