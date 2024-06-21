/*
 * @Author: zhangchunjie8 zhangchunjie8@jd.com
 * @Date: 2024-06-18 11:09:01
 * @LastEditors: zhangchunjie8 zhangchunjie8@jd.com
 * @LastEditTime: 2024-06-19 11:05:01
 * @FilePath: /study-2024/study-electron/day05-开发桌面摄像头软件/electron-app/src/main/drag.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
class Drag {
  private pageX = 0
  private pageY = 0
  private body?: HTMLElement

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor() {}

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  public run() {
    window.addEventListener('DOMContentLoaded', () => {
      this.body = document.body;
      this.body.addEventListener('mousedown', this.mouseDown.bind(this))
    })
  }

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  private mouseDown(e: MouseEvent) {
    this.pageX = e.pageX
    this.pageY = e.pageY
    const mouseMoveCallback = this.mouseEvent.bind(this)
    this.body?.addEventListener('mousemove', mouseMoveCallback)
    // 鼠标上抬时，添加去除鼠标移动事件
    this.body?.addEventListener('mouseup', () => {
      this.body?.removeEventListener('mousemove', mouseMoveCallback)
    })
    // 鼠标移出时，添加去除鼠标移动事件
    this.body?.addEventListener('mouseout', () => {
      this.body?.removeEventListener('mousemove', mouseMoveCallback)
    })
  }

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  private mouseEvent(e: MouseEvent) {
    // 左负右正。上负下正
    const x = e.pageX - this.pageX
    const y = e.pageY - this.pageY
    // 传递给主进程，让主进程修改位置值即可
    window.api.drag({ x, y })
  }
}

export default () => {
  const drag = new Drag()
  return { drag }
}