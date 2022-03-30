import config from "../config"
import canvasAbstract from "./canvasAbstract"
import model from "../model/tank"
import position from "../service/position"

class tank extends canvasAbstract implements ICanvas {
  num(): number {
    return config.tank.num
  }
  model(): ModelConstructor {
    return model
  }
  render(): void {
    this.createModels()
    super.renderModels()
  }
   // 生成模型实例
   protected createModels() {
     for(let i = 0; i < this.num(); i++) {
       const pos = position.position()
      const model = this.model()
      const instance = new model(this.canvas, pos.x, 0)
      this.models.push(instance)
      // this.canvas.drawImage(image.get('straw')!, position.x, position.y, config.model.width, config.model.height)
    }
  }
  
}

export default new tank()