'use strict';

const words = document.querySelector('.words');
let p = document.createElement('p');
words.appendChild(p);

const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
console.log(recognition);

recognition.continuous = true;
recognition.interimResults = true;
recognition.lang = 'en-US';

recognition.addEventListener('result', function (e) {
  const transcript = Array.from(e.results)
    .map(result => result[0])
    .map(result => result.transcript)
    .join('');

  p.textContent = transcript;

  if (e.results[0].isFinal) {
    p = document.createElement('p');
    words.appendChild('p');
  }
});

recognition.start();
recognition.addEventListener('end', recognition.start);
