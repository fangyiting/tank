import config from "../config"
import canvasAbstract from "./canvasAbstract"

class straw extends canvasAbstract {
  render(): void {
    super.drawModels(config.straw.num)
  }
  
}

export default new straw()