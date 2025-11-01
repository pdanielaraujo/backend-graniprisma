import { Module } from "@nestjs/common";
import { PrismaService } from "src/prisma.service";
import { ConsumersController } from "./consumers.controller";
import { ConsumersService } from "./consumers.service";

@Module({
  controllers: [ConsumersController],
  providers: [ConsumersService, PrismaService],
})
export class ConsumersModule {}
