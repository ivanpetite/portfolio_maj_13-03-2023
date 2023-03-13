var music = document.getElementById("music").autoplay;
const playPause = document.getElementById('music');
const animationmusic = document.getElementById('audio-visualiser');

    animationmusic.addEventListener('click', () => {
    const animations = document.querySelectorAll('[data-animation]');

    animations.forEach(animation => {
      const running = animation.style.animationPlayState || 'paused';
      animation.style.animationPlayState = running === 'paused' ? 'running' : 'paused';
    })
});

animationmusic.addEventListener('click', () => {
    document.getElementById('music').paused
    ? document.getElementById('music').play()
    : document.getElementById('music').pause()})