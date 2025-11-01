const letterContainer = document.querySelector('.letter-container');
const openButton = document.getElementById('openButton');
const closeButton = document.getElementById('closeButton');

openButton.addEventListener('click', () => {
  letterContainer.classList.add('open');
  openButton.style.display = 'none';
  closeButton.style.display='inline-block';

});

closeButton.addEventListener('click', () => {
  letterContainer.classList.remove('open');
  openButton.style.display = 'inline-block';
    closeButton.style.display='none';

});
