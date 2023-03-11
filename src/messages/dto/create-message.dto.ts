import { IsEmpty, IsNotEmpty, ValidateIf } from "class-validator/types/decorator/decorators";

export class CreateMessageDto {

    @IsNotEmpty()
    content: string;

    @IsNotEmpty()
    type: number;

    @ValidateIf(o => o.task_id == null || o.task_id == "" || o.task_id == undefined)
    @IsNotEmpty()
    project_id: string;

    @ValidateIf(o => o.project_id == null || o.project_id == "" || o.project_id == undefined)
    @IsNotEmpty()
    task_id: string;
}
