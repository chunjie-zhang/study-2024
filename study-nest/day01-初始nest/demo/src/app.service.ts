/*
 * @Author: zhangchunjie8 zhangchunjie8@jd.com
 * @Date: 2024-08-02 10:28:19
 * @LastEditors: zhangchunjie8 zhangchunjie8@jd.com
 * @LastEditTime: 2024-08-12 15:12:30
 * @FilePath: /study-2024/study-nest/day01-初始nest/demo/src/app.service.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'nestjs 来了';
  }
}
