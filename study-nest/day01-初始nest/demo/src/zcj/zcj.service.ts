import { Injectable } from '@nestjs/common';
import { CreateZcjDto } from './dto/create-zcj.dto';
import { UpdateZcjDto } from './dto/update-zcj.dto';

@Injectable()
export class ZcjService {
  create(createZcjDto: CreateZcjDto) {
    return 'This action adds a new zcj';
  }

  findAll() {
    return `This action returns all zcj`;
  }

  findOne(id: number) {
    return `This action returns a #${id} zcj`;
  }

  update(id: number, updateZcjDto: UpdateZcjDto) {
    return `This action updates a #${id} zcj`;
  }

  remove(id: number) {
    return `This action removes a #${id} zcj`;
  }
}
