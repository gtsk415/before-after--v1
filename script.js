const slider = document.querySelector('.slider');
const before = slider.querySelector('.before');
const beforeImage = before.querySelector('img');
const change = slider.querySelector('.change');
const body = document.body;

let isActive = false;

document.addEventListener('DOMContentLoaded', () => {
  let width = slider.offsetWidth;
  beforeImage.style.width = `${width}px`
});

const beforeAfterSlider = (x) => {
   let shift = Math.max(0, Math.min(x, slider.offsetWidth));
   before.style.width = `${shift}px`;
   change.style.left = `${shift}px`;
};

beforeAfterSlider.addEventListener('mousemove', (e) => {
  if (!isActive) {
    return;
  }
});