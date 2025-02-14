import { Module } from '@nestjs/common';
import { WhiskeyService } from './whiskey.service';
import { WhiskeyController } from './whiskey.controller';
import {PrismaService} from "../../prisma.service";
import {ConfigService} from "@nestjs/config";

@Module({
  controllers: [WhiskeyController],
  providers: [WhiskeyService, PrismaService, ConfigService],
})
export class WhiskeyModule {}
