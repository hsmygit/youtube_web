const moreBtn = document.querySelector('.info .metadata .moreBtn');
const title = document.querySelector('.info .metadata .title');

moreBtn.addEventListener('click', () => {
    moreBtn.classList.toggle('clicked');
    title.classList.toggle('clamp');
});


const actionButtons = document.querySelectorAll('.info .actions button');


actionButtons.forEach(button => {
  button.addEventListener('click', () => {
    button.querySelector('i').classList.toggle('active');
  });
});

const subscribeBtn = document.getElementById('subscribeBtn');

subscribeBtn.addEventListener('click', () => {
  if (subscribeBtn.textContent === '구독하기') {
    subscribeBtn.textContent = '구독중';
  } else {
    subscribeBtn.textContent = '구독하기';
  }
});

