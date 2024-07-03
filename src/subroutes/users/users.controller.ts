import { Controller, Get } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from 'src/models/user.schema';
// import { AppService } from './app.service';

@Controller()
export class UsersController {
    constructor(
        @InjectModel(User.name)
        public userModel: Model<UserDocument>
    ){}

    @Get('/')
    async getUsers(){
        console.log("THIS IS DATABAASES")
        const items = this.userModel.find();
        return items;
    }

}