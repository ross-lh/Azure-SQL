function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  /* manual toggle construction 
  if (html.classList.contains("light")) {
  html.classList.remove("light")
  } else {
  html.classList.add("light")
  }*/

  const img = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    img.setAttribute("src", "assets/avatar-light.png")
    img.setAttribute(
      "alt",
      "Luiz Ross de óculos em um ambiente claro com fundo cinza escuro"
    )
  } else {
    img.setAttribute("src", "assets/avatar.png")
    img.setAttribute(
      "alt",
      "Luiz Ross de óculos escuros em um ambiente escuro com fundo levemente iluminado"
    )
  }
}
