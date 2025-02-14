import {IsString} from "class-validator";

export class WhiskeyDto {
    @IsString()
    title: string

    @IsString()
    description: string
}