import {Controller, Get, UseGuards, Request} from '@nestjs/common';
import {JwtAuthGuard} from "../auth/guard/jwt-guard.guard";

@Controller('messages')
export class MessagesController {
    @Get()
    @UseGuards(JwtAuthGuard)
    getMessages(@Request() req) {
        console.log(req.user);
    }
}
