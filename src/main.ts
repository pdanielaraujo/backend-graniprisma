import { NestFactory } from "@nestjs/core";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import { AppModule } from "./app.module";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle("Graniprisma API Docs")
    .setDescription(
      "The Graniprisma API, to serve the frontend (site, app, etc.)",
    )
    .setVersion("1.0")
    .addTag("graniprisma")
    .build();
  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup("api", app, documentFactory);

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap()
  .then(() => {
    console.log("Application is running...");
  })
  .catch((err: unknown) => {
    console.error("Error during application bootstrap:", err);
  });
