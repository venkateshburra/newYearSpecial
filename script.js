const closeHeader = document.querySelector('.close_header'); // First header
const expandHeader = document.querySelector('.expand_header'); // Second header
const heade3 = document.querySelector('.heade3'); // Third header

// Initial button in the first header
const btnHide = document.querySelector('.close_header .btn');

// Handle the first click
btnHide.addEventListener('click', () => {
  closeHeader.style.display = 'none';
  expandHeader.style.display = 'block';

  // Add an event listener for the second button in the second header
  const secondButton = expandHeader.querySelector('button');
  secondButton.addEventListener('click', () => {
    expandHeader.style.display = 'none';
    heade3.style.display = 'block';
  });
});
