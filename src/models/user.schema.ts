import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { Role } from 'src/types/users.types';
export type UserDocument = HydratedDocument<User>;

@Schema({ timestamps: true, versionKey: false })
export class User {
  @Prop({ type: String, required: true })
  name?: string;

  @Prop({ type: Array, required: false })
  role: Role[];

  @Prop({ type: String, required: true})
  email?: string;

}

export const UserSchema = SchemaFactory.createForClass(User);