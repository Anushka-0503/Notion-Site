import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './subroutes/users/users.module';
import { RouterModule } from '@nestjs/core';

@Module({
  imports: [UsersModule,
    RouterModule.register([
      {
        path: 'users',
        module: UsersModule,
      },
    ]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
