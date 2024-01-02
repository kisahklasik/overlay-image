let shareData = {
title: 'Twibbon Generator',
text: 'Komunitas Badut Indonesia',
url: 'https://bungferry.netlify.app/',
}

const btn = document.querySelector('em');
const resultPara = document.querySelector('.result');

btn.addEventListener('click', () => {
navigator.share(shareData)
.then(() =>
resultPara.textContent = 'Twibbon berhasil dibagikan.'
)
.catch((e) =>
resultPara.textContent = 'Error: ' + e
)
});
