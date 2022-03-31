
import modelAbstract from "./modelAbstract";
import { image } from "../service/images";
import water from "../canvas/water";

export default class extends modelAbstract implements IModel {
  public canvas: ICanvas = water;
  name: string = 'water';
  image(): HTMLImageElement {
    return image.get('water')!
  }
  render(): void {
    super.draw()
  }
  
}