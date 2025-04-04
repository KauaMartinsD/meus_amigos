document.addEventListener("DOMContentLoaded", () => {
  const audio = document.getElementById("musica");

  const playAudio = () => {
    audio.play().then(() => {
      console.log("Música tocando.");
    }).catch((e) => {
      console.log("Falha ao tocar música:", e);
    });

    // Remove os eventos depois do primeiro toque
    document.removeEventListener("click", playAudio);
    document.removeEventListener("touchstart", playAudio);
  };

  // Espera o primeiro toque do usuário
  document.addEventListener("click", playAudio);
  document.addEventListener("touchstart", playAudio);
});


  