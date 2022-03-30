
import modelAbstract from "./modelAbstract";
import { image } from "../service/images";

export default class straw extends modelAbstract implements IModel {
  render(): void {
    super.draw(image.get('wall')!)
  }
  
}