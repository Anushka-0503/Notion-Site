
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { config } from './configuration/configuration';
import { User, UserSchema } from './models/user.schema';
import { Auth, AuthSchema } from './models/auth.schema';

@Module({
    imports: [
      MongooseModule.forRoot(config.mongoUris.primary),
      MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
      MongooseModule.forFeature([{ name: Auth.name, schema: AuthSchema }]),
    ],
    exports: [MongooseModule],
  })
  export class DBModule {}