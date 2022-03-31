
import modelAbstract from "./modelAbstract";
import { image } from "../service/images";
import wall from "../canvas/wall";

export default class extends modelAbstract implements IModel {
  public canvas: ICanvas = wall;
  name: string = 'wall';
  image(): HTMLImageElement {
    return image.get('wall')!
  }
  render(): void {
    super.draw()
  }
  
}