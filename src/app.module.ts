import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './subroutes/users/users.module';
import { RouterModule } from '@nestjs/core';
import { AuthModule } from './subroutes/auth/auth.module';

@Module({
  imports: [UsersModule,
    AuthModule,
    RouterModule.register([
      {
        path: 'users',
        module: UsersModule,
      },
    ]),
    RouterModule.register([
      {
        path: 'auth',
        module: AuthModule,
      },
    ]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
