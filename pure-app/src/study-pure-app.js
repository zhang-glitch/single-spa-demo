let pureAppContainer = null

export async function bootstrap() {
  console.log("应用正在启动")
}
export async function mount() {
  console.log("应用正在挂载")
  pureAppContainer = document.createElement("div")
  pureAppContainer.id = "pureAppContainer"
  pureAppContainer.innerHTML = "pure app"
  document.body.appendChild(pureAppContainer)
}
export async function unmount() {
  console.log("应用正在卸载")
  document.body.removeChild(pureAppContainer)
}
