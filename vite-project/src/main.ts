import './style.scss'
import config from './config'
import straw from './canvas/straw'

import './service/images'
import { promise } from './service/images'


const app = document.querySelector<HTMLDivElement>('#app')!
app.style.width = config.canvas.width + 'px',
app.style.height = config.canvas.height + 'px'

async function bootstrap() {
  await Promise.all(promise)
  straw.render()
}

void bootstrap()
