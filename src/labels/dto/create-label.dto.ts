import { IsNotEmpty } from "class-validator";
import { IsEmpty, IsOptional } from "class-validator/types/decorator/decorators";

export class CreateLabelDto {

    @IsNotEmpty()
    label: string;  

    @IsOptional()
    color: string;  

    @IsNotEmpty()  
    project: string;
}
