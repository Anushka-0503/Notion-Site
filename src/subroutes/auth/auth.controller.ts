import {
  Body,
  Controller,
  HttpException,
  HttpStatus,
  Post,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Auth, AuthDocument } from 'src/models/auth.schema';
import { CreateTokenDto, VerifyTokenDto } from './auth.types';
import * as bcrypt from 'bcrypt';

@Controller()
export class AuthController {
  constructor(
    @InjectModel(Auth.name)
    public authModel: Model<AuthDocument>,
  ) {}

  @Post('/register')
  async createToken(@Body() req: CreateTokenDto): Promise<{ message: string }> {
    console.log('Request body is ', req);
    const { username, password } = req;

    try {
      console.log(username);

      const hash = await bcrypt.hash(password, 10);
      await this.authModel.create({ username, password: hash });
      return { message: 'USER REGISTERED' };
    } catch (err) {
      console.error('Error registering user:', err);
      throw new HttpException(
        { message: 'Error registering user', error: err.message },
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @Post('/login')
  async verifyToken(@Body() req: VerifyTokenDto): Promise<{ message: string }> {
    const { username, password } = req;

    try {
      const existingUser = this.authModel.findOne({ username });
      console.log(existingUser);
      if (!existingUser) {
        throw new HttpException('User doesnt exist! Please register!', HttpStatus.CONFLICT);
      }
      else{
        return {message: 'LOGGED IN!'}
      }
    } catch (err) {
      console.log(err)
    }
  }
}
