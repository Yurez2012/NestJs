import {Controller, Get, UseGuards, Request, Param, ParseIntPipe, ValidationPipe} from '@nestjs/common';
import {JwtAuthGuard} from "../auth/guard/jwt-guard.guard";
import {MessagesService} from "./messages.service";
import {ShowMessagesDto} from "./dto/show-messages.dto";

@Controller('messages')
export class MessagesController {
    constructor(private messageService: MessagesService) {}

    @Get('/:user_id/:user_type')
    @UseGuards(JwtAuthGuard)
    getMessages(
        @Request() req,
        @Param(new ValidationPipe()) dto: ShowMessagesDto,
    ) {
        return this.messageService.getMessagesByUser(dto);
    }
}
