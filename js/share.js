let shareData = {
title: 'Twibbon Generator',
text: 'Komunitas Badut Indonesia',
url: 'https://selalusalah.vercel.app/',
}

const btn = document.querySelector('em');
const resultPara = document.querySelector('.result');

btn.addEventListener('click', () => {
navigator.share(shareData)
.then(() =>
resultPara.textContent = 'Twibbon shared successfully'
)
.catch((e) =>
resultPara.textContent = 'Error: ' + e
)
});
