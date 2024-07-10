import { Module } from "@nestjs/common";
import { DBModule } from "src/db.module";
import { UsersController } from "./users.controller";
import { UserService } from "./users.service";

@Module({
    imports: [DBModule],
    controllers: [UsersController],
    providers: [UserService]
  })
  export class UsersModule {}