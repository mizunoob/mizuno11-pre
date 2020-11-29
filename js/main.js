'use strict';

{
  const open = document.getElementById('open');
  const overlay = document.querySelector('.overlay');
  const close = document.getElementById('close');
  const mnclose = document.getElementById('mn-close');
  const cpclose = document.getElementById('cp-close');
  const acclose = document.getElementById('ac-close');
  const rsclose = document.getElementById('rs-close');


  open.addEventListener('click', () => {
    overlay.classList.add('show');
    open.classList.add('hide');
  });

  close.addEventListener('click', () => {
    overlay.classList.remove('show');
    open.classList.remove('hide');
  });

  mnclose.addEventListener('click', () => {
    overlay.classList.remove('show');
    open.classList.remove('hide');
  });

  cpclose.addEventListener('click', () => {
    overlay.classList.remove('show');
    open.classList.remove('hide');
  });

  acclose.addEventListener('click', () => {
    overlay.classList.remove('show');
    open.classList.remove('hide');
  });

  rsclose.addEventListener('click', () => {
    overlay.classList.remove('show');
    open.classList.remove('hide');
  });
}

