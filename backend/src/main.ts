import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import cookieParser from 'cookie-parser'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  app.use(cookieParser())

  app.enableCors({
    origin: process.env.CLIENT_URL,
    credentials: true,
    exposedHeaders: 'Set-Cookie'
  })
  await app.listen(process.env.SERVER_URL ?? 5000)
  console.log(`Server is running: ${process.env.SERVER_URL}`)
}
bootstrap()
