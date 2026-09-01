const frame = document.querySelector('#soundFrame');
const musicLink = document.querySelector('#musicLink');
const musicText = document.querySelector('#musicText');
const startAtMainMoment =
  'https://www.youtube.com/embed/VcwiHg4QxuA?autoplay=1&mute=0&playsinline=1&rel=0&start=58&loop=1&playlist=VcwiHg4QxuA';

function restartSoundtrack() {
  if (!frame) return;
  frame.src = `${startAtMainMoment}&restart=${Date.now()}`;
}

window.addEventListener('load', () => {
  restartSoundtrack();
});

document.addEventListener(
  'pointerdown',
  () => {
    restartSoundtrack();
  },
  { once: true },
);

if (musicLink) {
  musicLink.addEventListener('click', (event) => {
    event.preventDefault();
    restartSoundtrack();
    if (musicText) musicText.textContent = 'Playing';
  });
}
