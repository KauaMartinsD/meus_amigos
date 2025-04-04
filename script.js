window.addEventListener('DOMContentLoaded', () => {
  const audio = document.getElementById("musica");

  const playMusic = () => {
    audio.play().then(() => {
      console.log("Música tocando.");
    }).catch(err => {
      console.log("Falha ao tocar música:", err);
    });

    // Remove os eventos depois do primeiro toque
    document.removeEventListener('click', playMusic);
    document.removeEventListener('touchstart', playMusic);
  };

  // Espera qualquer toque ou clique na tela
  document.addEventListener('click', playMusic);
  document.addEventListener('touchstart', playMusic);
});

  