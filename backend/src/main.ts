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

  const serverUrl = process.env.SERVER_URL ?? 'http://localhost:5000'
  const port = new URL(serverUrl).port

  await app.listen(Number(port))
  console.log(`Server is running: ${serverUrl}`)
}
bootstrap()
