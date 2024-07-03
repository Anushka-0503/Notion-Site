
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { config } from './configuration/configuration';
import { User, UserSchema } from './models/user.schema';

@Module({
    imports: [
      MongooseModule.forRoot(config.mongoUris.primary),
      MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
     
    ],
    exports: [MongooseModule],
  })
  export class DBModule {}