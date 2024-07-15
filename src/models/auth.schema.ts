import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { Role } from 'src/types/users.types';
export type AuthDocument = HydratedDocument<Auth>;

@Schema({ timestamps: true, versionKey: false })
export class Auth {
  @Prop({ type: String, required: true, unique: true })
  username: string;

  @Prop({ type: String, required: true })
  password: string;

}

export const AuthSchema = SchemaFactory.createForClass(Auth);