import config from "../config"

type mapKey = keyof typeof config.images
export const image = new Map<mapKey, HTMLImageElement>()

// [Promise, Promise]

export const promise =  Object.entries(config.images).map(([key, value]) => {
  // console.log(value, key);
  return new Promise((resolve) => {
    const img = document.createElement('img')
    img.src = value
    img.onload = () => {
      image.set(key as mapKey, img)
      console.log(img)
      resolve(img)
    }
  })
})