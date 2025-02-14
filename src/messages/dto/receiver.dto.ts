
import { IsString, IsInt } from 'class-validator';
import {Type} from "class-transformer";

export class ReceiverDto {
    @Type(() => Number)
    @IsInt()
    receiver_id: number;

    @IsString()
    receiver_type: string;

    @IsString()
    text: string;
}
