import config from "../config"
import position from "../service/position"
export default abstract class canvasAbstract {
  protected models: IModel [] = []
  abstract render():void
  constructor(
    protected app = document.querySelector('#app') as HTMLDivElement,
    protected el = document.createElement('canvas'),
    protected canvas = el.getContext('2d')!
  ) {
    this.createCanvas()
  }
  // 创建画布
  protected createCanvas() {
    this.el.width = config.canvas.width
    this.el.height = config.canvas.height

    this.app.insertAdjacentElement('afterbegin', this.el)
  }

  // 生成模型实例
  protected createModels(num:number, model: ModelConstructor) {
    position.getCollection(num).forEach(position => {
      const instance = new model(this.canvas, position.x, position.y)
      this.models.push(instance)
      // this.canvas.drawImage(image.get('straw')!, position.x, position.y, config.model.width, config.model.height)
    })
  }

  // 将模型渲染到画布上
  protected renderModels() {
    this.models.forEach(model => model.render())
  }
  
}