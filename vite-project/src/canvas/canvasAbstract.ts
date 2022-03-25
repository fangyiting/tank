import config from "../config"
import { image } from "../service/images"
export default abstract class canvasAbstract {
  protected item = []
  abstract render():void
  constructor(
    protected app = document.querySelector('#app') as HTMLDivElement,
    protected el = document.createElement('canvas'),
    protected canvas = el.getContext('2d')!
  ) {
    this.createCanvas()
  }
  protected createCanvas() {
    this.el.width = config.canvas.width
    this.el.height = config.canvas.height

    this.app.insertAdjacentElement('afterbegin', this.el)
  }

  protected drawModels(num:number, model:any) {
    this.positionCollection(num).forEach(position => {
      new model(this.canvas, position.x, position.y)
      this.canvas.drawImage(image.get('straw')!, position.x, position.y, config.model.width, config.model.height)
    })
  }
  // 批量获取唯一草地坐标
  protected positionCollection(num: number) {
    const colleciton = [] as {x: number; y: number}[]
    for(let i = 0; i < num; i++){
      while(true) {
        const position = this.position()
        const exists = colleciton.some(c=>c.x == position.x && c.y == position.y)
        if(!exists) {
          colleciton.push(position)
          break
        }
      }
    }
    return colleciton
  }
  protected position() {
    return { 
      x: Math.floor(Math.random()*(config.canvas.width/config.model.width)) * config.model.width,
      y: Math.floor(Math.random()*(config.canvas.height/config.model.height)) * config.model.height,
    }
  }
}