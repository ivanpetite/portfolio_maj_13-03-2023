const supportsVideo = !!document.createElement('video').canPlayType;
if (supportsVideo) {
}

const supportsProgress = (document.createElement('progress').max !== undefined);
if (!supportsProgress) progress.setAttribute('data-state', 'fake');

const videoContainer = document.getElementById('videoContainer');
const video = document.getElementById('video');
const videoControls = document.getElementById('video-controls');

video.controls = false;
videoControls.setAttribute('data-state', 'visible');
videoControls.style.display = 'inline-flex';

const video_player = document.querySelector("#video");
const playpause = document.getElementById('playpause');
const mute = document.getElementById('mute');
const volinc = document.getElementById('volinc');
const voldec = document.getElementById('voldec');
const progress = document.getElementById('progress');
const progressBar = document.getElementById('progress-bar');
const fullscreen = document.getElementById('fs');

function changeButtonState(type) {
    if (type === 'playpause') {
      if (video.paused || video.ended) {
        playpause.setAttribute('data-state', 'play');
      } else {
        playpause.setAttribute('data-state', 'pause');
      }
    } else if (type === 'mute') {
      // Mute button
      mute.setAttribute('data-state', video.muted ? 'unmute' : 'mute');
    }
  }

  video.addEventListener('play', () => {
    changeButtonState('playpause');
 }, false);
 
 video.addEventListener('pause', () => {
    changeButtonState('playpause');
 }, false);
 
 mute.addEventListener('click', (e) => {
   video.muted = !video.muted;
   changeButtonState('mute');
 });

playpause.addEventListener('click', (e) => {
    if (video.paused || video.ended) {
      video.play();
    } else {
      video.pause();
    }
  });

function checkVolume(dir) {
    if (dir) {
      const currentVolume = Math.floor(video.volume * 10) / 10;
      if (dir === '+' && currentVolume < 1) {
         video.volume += 0.1;
      } else if (dir === '-' && currentVolume > 0) {
         video.volume -= 0.1;
      }

      video.muted = currentVolume <= 0;
    }
    changeButtonState('mute');
  }
  
  const alterVolume = (dir) => {
    checkVolume(dir);
  }

video.addEventListener('volumechange', () => {
  checkVolume();
}, false);

//fonctions pour la progress bar

video.addEventListener('loadedmetadata', () => {
    progress.setAttribute('max', video.duration);
  });

video.addEventListener('timeupdate', () => {
  progress.value = video.currentTime;
  progressBar.style.width = `${Math.floor(video.currentTime * 100 / video.duration)}%`;
});

video.addEventListener('timeupdate', () => {
    if (!progress.getAttribute('max')) progress.setAttribute('max', video.duration);
    progress.value = video.currentTime;
    progressBar.style.width = `${Math.floor(video.currentTime * 100 / video.duration)}%`;
  });

progress.addEventListener('click', (e) => {
  const pos = (e.pageX  - progress.offsetLeft - progress.offsetParent.offsetLeft) / progress.offsetWidth;
  video.currentTime = pos * video.duration;
});

if (!document?.fullscreenEnabled) {
  fullscreen.style.display = 'none';
}

fullscreen.addEventListener('click', (e) => {
    handleFullscreen();
  });

function handleFullscreen() {
  if (document.fullscreenElement !== null) {

    document.exitFullscreen();
    setFullscreenData(false);
  } else {
    videoContainer.requestFullscreen();
    setFullscreenData(true);
  }
}

function setFullscreenData(state) {
    videoContainer.setAttribute('data-fullscreen', !!state);
  }
document.addEventListener('fullscreenchange', (e) => {
  setFullscreenData(!!document.fullscreenElement);
});

const planpict = document.querySelector('#video')
const figure = document.querySelector('#videoContainer')

fullscreen.addEventListener('click', () => {
  planpict.classList.toggle('#video');
  figure.classList.toggle('#viddeoContainer');
 })