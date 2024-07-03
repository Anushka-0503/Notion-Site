import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { Role } from 'src/types/users.types';
export type UserDocument = HydratedDocument<User>;

@Schema({ timestamps: true, versionKey: false })
export class User {
  @Prop({ type: String, required: false })
  name?: string;

  @Prop({ type: Array, required: false })
  role: Role[];
}

export const UserSchema = SchemaFactory.createForClass(User);