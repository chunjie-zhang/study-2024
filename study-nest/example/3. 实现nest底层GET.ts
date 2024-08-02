/*
 * @Author: zhangchunjie8 zhangchunjie8@jd.com
 * @Date: 2024-07-29 20:34:33
 * @LastEditors: zhangchunjie8 zhangchunjie8@jd.com
 * @LastEditTime: 2024-07-30 10:01:23
 * @FilePath: /study-2024/study-nest/example/3. 实现nest底层GET.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import axios from 'axios'

const Get = (url: string) => {
  return (target: any, key: any, descriptor: PropertyDecorator) => {
    const fnc = descriptor.value;
    axios.get(url).then((res) => {
      fnc(res, {
        status: 200,
        success: true,
      })
    }).catch((error) => {
      fnc(error, {
        status: 500,
        success: false,
      })
    })
  }
}

class Controller {
  constructor() {

  }

  @Get('https://zhangchunjie.com/api/getList')
  getList(res:any, status:any) {
    console.log(res.data, status);
  }
}