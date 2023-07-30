document.querySelectorAll(".tecla").forEach(tecla => {
    tecla.addEventListener("click", tocarNota)
})

function tocarNota(e) {
    let classes = Array.from(this.classList)

    const oitava = this.parentElement.getAttribute("otaiva")
    const nota = classes[classes.length - 1]
    const nomeDoAudio = `notas/${nota}${oitava}.mp3`

    const audio = new Audio(nomeDoAudio)

    audio.volume = document.getElementById("volume").value

    audio.play()
}
