import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { PrismaModule } from './prisma/prisma.module';
import { UrlsController } from './urls/urls.controller';
import { UrlsModule } from './urls/urls.module';
import { RouterModule, Routes } from '@nestjs/core';

const routes: Routes = [
  {
    path: '/users',
    module: UserModule,
    children: [
      {
        path: '/urls',
        module: UrlsModule,
      },
    ],
  },
];

@Module({
  imports: [
    UserModule,
    PrismaModule,
    UrlsModule,
    RouterModule.register(routes), // setup the routes
],
  controllers: [AppController, UrlsController],
  providers: [AppService],
})
export class AppModule {}
