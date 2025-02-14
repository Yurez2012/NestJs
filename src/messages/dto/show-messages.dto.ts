import { IsString, IsInt } from 'class-validator';

export class ShowMessagesDto {
    @IsInt()
    user_id: number;

    @IsString()
    user_type: string;
}
