import config from "../config"
import canvasAbstract from "./canvasAbstract"
import model from "../model/straw"

class straw extends canvasAbstract implements ICanvas {
  render(): void {
    super.createModels()
    super.renderModels()
  }
  num(): number {
    return config.straw.num
  }
  model(): ModelConstructor {
    return model
  }
  
}

export default new straw()