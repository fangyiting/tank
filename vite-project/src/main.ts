import './style.scss'
import config from './config'
import straw from './canvas/straw'
import wall from './canvas/wall'
import water from './canvas/water'
import './service/images'
import { promise } from './service/images'
import steels from './canvas/steels'
import tank from './canvas/tank'



const app = document.querySelector<HTMLDivElement>('#app')!
app.style.width = config.canvas.width + 'px',
app.style.height = config.canvas.height + 'px'

async function bootstrap() {
  await Promise.all(promise)
  straw.render()
  wall.render()
  water.render()
  steels.render()
  tank.render()
}

void bootstrap()
