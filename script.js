document.addEventListener("DOMContentLoaded", () => {
  const botaoPlay = document.getElementById("botao-play");
  const tela = document.getElementById("tela-inicial");
  const conteudo = document.getElementById("conteudo");
  const audio = document.getElementById("musica");

  botaoPlay.addEventListener("click", () => {
    // Toca música
    audio.play().then(() => {
      console.log("Música tocando.");
    }).catch((e) => {
      console.log("Erro ao tocar música:", e);
    });

    // Some com tela inicial e mostra conteúdo
    tela.style.display = "none";
    conteudo.style.display = "block";
  });
});


  