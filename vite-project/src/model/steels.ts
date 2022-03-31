
import modelAbstract from "./modelAbstract";
import { image } from "../service/images";
import steels from "../canvas/steels";

export default class extends modelAbstract implements IModel {
  public canvas: ICanvas = steels;
  name: string = 'steels';
  image(): HTMLImageElement {
    return image.get('steels')!
  }
  render(): void {
    super.draw()
  }
  
}