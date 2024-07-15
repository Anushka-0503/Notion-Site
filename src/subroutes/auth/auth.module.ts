import { Module } from "@nestjs/common";
import { DBModule } from "src/db.module";
import { AuthController } from "./auth.controller";

@Module({
    imports: [DBModule],
    controllers: [AuthController],
  })
  export class AuthModule {}