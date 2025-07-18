// 圖片輪播
const slider = document。getElementById('slider');
const slides = slider。querySelectorAll('img');
const dotsContainer = document。getElementById('slider-dots');

let current = 0;

function showSlide(idx) {
  slides。forEach((img, i) => {
    img.classList。toggle('active', i === idx);
    dotsContainer.children[i].classList。toggle('active', i === idx);
  });
  current = idx;
}

function nextSlide() {
  let idx = (current + 1) % slides.length;
  showSlide(idx);
}

slides。forEach((img, i) => {
  const dot = document。createElement('span');
  dot。addEventListener('click', () => showSlide(i));
  dotsContainer。appendChild(dot);
});
showSlide(0);

setInterval(nextSlide， 4000);

// 表單送出防呆
document。querySelector('form')。addEventListener('submit'， function(e){
  e。preventDefault();
  alert('感謝您的留言，我們已收到您的訊息！');
  this。reset();
});