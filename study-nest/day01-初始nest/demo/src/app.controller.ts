/*
 * @Author: zhangchunjie8 zhangchunjie8@jd.com
 * @Date: 2024-08-02 10:28:19
 * @LastEditors: zhangchunjie8 zhangchunjie8@jd.com
 * @LastEditTime: 2024-08-02 10:53:56
 * @FilePath: /study-2024/study-nest/day01-初始nest/demo/src/app.controller.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('/a')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/b')
  getHello(): string {
    return this.appService.getHello();
  }
}
