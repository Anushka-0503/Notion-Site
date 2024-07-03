import { Module } from "@nestjs/common";
import { DBModule } from "src/db.module";
import { UsersController } from "./users.controller";

@Module({
    imports: [DBModule],
    controllers: [UsersController],
  })
  export class UsersModule {}