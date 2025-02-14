import { Injectable } from '@nestjs/common';
import {PrismaService} from "../../prisma.service";
import {WhiskeyDto} from "./dto/whiskey.dto";
import {ConfigService} from "@nestjs/config";

@Injectable()
export class WhiskeyService {
    constructor(private readonly prisma: PrismaService, private readonly configService: ConfigService) {
    }

    index() {
        console.log(this.configService.get('MODE'));
        return this.prisma.whiskey.findMany();
    }

    create(dto: WhiskeyDto) {
        return this.prisma.whiskey.create({
            data: dto
        });
    }
}
