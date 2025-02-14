import {
    Controller,
    Get,
    UseGuards,
    Request,
    Param,
    ValidationPipe,
    Post,
    Body
} from '@nestjs/common';
import {JwtAuthGuard} from "../auth/guard/jwt-guard.guard";
import {MessagesService} from "./messages.service";
import {SenderDto} from "./dto/sender.dto";
import {ReceiverDto} from "./dto/receiver.dto";

@Controller('message')
export class MessagesController {
    constructor(private messageService: MessagesService) {
    }

    @Get('/:sender_id/:sender_type')
    @UseGuards(JwtAuthGuard)
    getMessages(
        @Param(new ValidationPipe({ transform: true})) dto: SenderDto,
    ) {
        return this.messageService.getMessagesByUser(dto);
    }

    @Post('/store')
    @UseGuards(JwtAuthGuard)
    storeMessage(
        @Request() req,
        @Body(new ValidationPipe({ transform: true})) receiver: ReceiverDto,
    ) {
        const messageData = {
            sender_id: req.user.userId,
            sender_type: req.user.userType,
            receiver_id: receiver.receiver_id,
            receiver_type: receiver.receiver_type,
            text: receiver.text,
        };

        return this.messageService.storeMessage(messageData);
    }
}
