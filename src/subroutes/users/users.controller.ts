import { Controller, Get } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from 'src/models/user.schema';

@Controller()
export class UsersController {
  constructor(
    @InjectModel(User.name)
    public userModel: Model<UserDocument>,
  ) {}

  @Get('/')
  async getUsers() {
    const items = this.userModel.find();
    return items;
  }
}
