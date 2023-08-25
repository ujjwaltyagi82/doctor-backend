import { Module , MiddlewareConsumer} from '@nestjs/common';
import { AppController } from './app.controller';
import { UserModule } from './user/user.module';
import { AppService } from './app.service';

import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

@Module({
  imports: [UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor() {}

  configure(consumer: MiddlewareConsumer) {
    
  }

  configureNestJSApplication(app) {
    const config = new DocumentBuilder()
      .setTitle('User API')
      .setDescription('API for patient')
      .setVersion('1.0')
      .addTag('users') 
      .build();
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('api', app, document);
  }
}
