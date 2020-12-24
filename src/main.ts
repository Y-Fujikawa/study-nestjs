/**
 * Nestアプリケーションのインスタンスを作成するために、コア機能であるNestFactoryを使用するアプリケーションのエントリファイル。
 */
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
