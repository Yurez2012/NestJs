import { Injectable } from '@nestjs/common';
import {PrismaService} from "../../prisma.service";
import {ShowMessagesDto} from "./dto/show-messages.dto";

@Injectable()
export class MessagesService {
    constructor(private prisma: PrismaService) {}

    getMessagesByUser(dto: ShowMessagesDto) {
        console.log(dto);

        return this.prisma.messages.findMany({
            where: {
                OR: [
                    { sender_id: dto.user_id, sender_type: dto.user_type },
                    { receiver_id: dto.user_id, receiver_type: dto.user_type }
                ]
            }
        });
    }
}
