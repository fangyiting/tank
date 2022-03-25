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

  protected drawModels() {
      const position = this.position()
      console.log(this.canvas);
      this.canvas.drawImage(image.get('straw')!, position.x, position.y, config.model.width, config.model.height)
  }
  protected position() {
    return { 
      x: 20,
      y: 30
    }
  }
}