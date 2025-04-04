window.addEventListener('DOMContentLoaded', () => {
    const audio = document.getElementById("musica");
  
    const playMusic = () => {
      audio.play();
      document.removeEventListener('click', playMusic);
      document.removeEventListener('touchstart', playMusic);
    };
  
    document.addEventListener('click', playMusic);
    document.addEventListener('touchstart', playMusic);
  });
  