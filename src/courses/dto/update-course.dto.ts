import { PartialType } from "@nestjs/mapped-types";
import { CreateCourseDTO } from "./create-course.dto";

// PartialType() é um método de mapped-types que serve para copiar os atributos de outra classe, porém tornando-os opcionais.
export class UpdateCourseDTO extends PartialType(CreateCourseDTO) {}