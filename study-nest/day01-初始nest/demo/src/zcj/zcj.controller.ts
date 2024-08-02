import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ZcjService } from './zcj.service';
import { CreateZcjDto } from './dto/create-zcj.dto';
import { UpdateZcjDto } from './dto/update-zcj.dto';

@Controller('zcj')
export class ZcjController {
  constructor(private readonly zcjService: ZcjService) {}

  @Post()
  create(@Body() createZcjDto: CreateZcjDto) {
    return this.zcjService.create(createZcjDto);
  }

  @Get()
  findAll() {
    return this.zcjService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.zcjService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateZcjDto: UpdateZcjDto) {
    return this.zcjService.update(+id, updateZcjDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.zcjService.remove(+id);
  }
}
