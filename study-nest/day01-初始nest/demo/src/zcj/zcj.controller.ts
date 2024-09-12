/*
 * @Author: zhangchunjie8 zhangchunjie8@jd.com
 * @Date: 2024-08-02 11:35:41
 * @LastEditors: zhangchunjie8 zhangchunjie8@jd.com
 * @LastEditTime: 2024-08-19 11:36:50
 * @FilePath: /study-2024/study-nest/day01-初始nest/demo/src/zcj/zcj.controller.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { Controller, Get, Post, Body, Patch, Param, Delete, Version } from '@nestjs/common';
import { ZcjService } from './zcj.service';
import { CreateZcjDto } from './dto/create-zcj.dto';
import { UpdateZcjDto } from './dto/update-zcj.dto';

@Controller({
  path: 'zcj',
  version: '1'
})
export class ZcjController {
  constructor(private readonly zcjService: ZcjService) {}

  @Post()
  create(@Body() createZcjDto: CreateZcjDto) {
    return this.zcjService.create(createZcjDto);
  }

  @Get()
  @Version('2')
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
