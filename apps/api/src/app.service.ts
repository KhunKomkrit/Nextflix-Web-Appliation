import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHomePage(): string {
    return `
    <!DOCTYPE html>
    <html>
    <head>
      <title>Nextflix API</title>
      <style>
  body {
    font-family: 'Segoe UI', sans-serif;
    background-color: #f0f8ff;
    color: #003366;
    padding: 2rem;
    text-align: center;
  }

  h1 {
    color: #005c99;
  }

  a {
    color: #007bff;
    text-decoration: none;
    font-weight: 500;
  }

  a:hover {
    text-decoration: underline;
  }

  button {
    margin-top: 1rem;
    background-color: #007bff;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 6px;
    font-size: 1rem;
    cursor: pointer;
  }

  button:hover {
    background-color: #0056b3;
  }
</style>
    </head>
    <body>
      <h1>Nextflix API Gateway</h1>
      <a href="/api-doc">API Documentation (Swagger)</a><br/>
     <a href="/nextflix/json" download="nextflix-api-doc.json" target="_blank">
  <button>⬇️ Download API Document (JSON)</button>
</a>
    </body>
    </html>
  `;
  }
}
