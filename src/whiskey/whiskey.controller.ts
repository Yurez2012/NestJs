import {Body, Controller, Get, Post, Query, UseGuards, UseInterceptors, UsePipes, ValidationPipe} from '@nestjs/common';
import { WhiskeyService } from './whiskey.service';
import {ParseIntPipe} from "../conception/pipe";
import {AuthGuard} from "../conception/auth";
import {LoggingInterceptor} from "../conception/interceptor";
import {WhiskeyDto} from "./dto/whiskey.dto";

@Controller('whiskey')
@UseInterceptors(LoggingInterceptor)
export class WhiskeyController {
  constructor(private readonly whiskeyService: WhiskeyService) {}

  @Get()
  @UseGuards(AuthGuard)
  index() {
    return this.whiskeyService.index();
  }

  @Post()
  @UsePipes(new ValidationPipe())
  @UseGuards(AuthGuard)
  create(@Body() dto: WhiskeyDto) {
    return this.whiskeyService.create(dto);
  }
}
