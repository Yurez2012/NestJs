import { IsString, IsInt } from 'class-validator';
import {Type} from "class-transformer";

export class SenderDto {
    @Type(() => Number)
    @IsInt()
    sender_id: number;

    @IsString()
    sender_type: string;
}
