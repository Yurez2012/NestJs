import {Injectable} from '@nestjs/common';
import {PrismaService} from "../../prisma.service";
import {ReceiverDto} from "./dto/receiver.dto";
import {SenderDto} from "./dto/sender.dto";

@Injectable()
export class MessagesService {
    constructor(private prisma: PrismaService) {
    }

    getMessagesByUser(dto: SenderDto) {
        return this.prisma.messages.findMany({
            where: {
                OR: [
                    {sender_id: dto.sender_id, sender_type: dto.sender_type},
                    {receiver_id: dto.sender_id, receiver_type: dto.sender_type}
                ]
            }
        });
    }

    storeMessage(data) {
        return this.prisma.messages.create({data});
    }
}
