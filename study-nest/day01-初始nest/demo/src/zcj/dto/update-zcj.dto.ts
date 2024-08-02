import { PartialType } from '@nestjs/mapped-types';
import { CreateZcjDto } from './create-zcj.dto';

export class UpdateZcjDto extends PartialType(CreateZcjDto) {}
