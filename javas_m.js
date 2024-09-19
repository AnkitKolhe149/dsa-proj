// Get elements
const sidebar = document.querySelector('.sidebar');
const sidebarToggle = document.querySelector('.sidebar-toggle');
const mainContent = document.querySelector('.main-content');
const mergeSortSection = document.querySelector('#merge-sort');
const arrayInput = document.querySelector('#array-input');
const sortButton = document.querySelector('#sort-button');
const timeComplexityCalculator = document.querySelector('#time-complexity-calculator');

// Toggle sidebar on smaller screens
sidebarToggle.addEventListener('click', () => {
  sidebar.classList.toggle('active');
  mainContent.classList.toggle('active');
});

// Animated scrolling to sections
document.querySelectorAll('.sidebar ul li a').forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const sectionId = link.getAttribute('href');
    const section = document.querySelector(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
  });
});

// Interactive Merge Sort simulation
sortButton.addEventListener('click', () => {
  const array = arrayInput.value.split(',').map(Number);
  const sortedArray = mergeSort(array);
  const sortedArrayHtml = sortedArray.map((num) => `<span>${num}</span>`).join('');
  mergeSortSection.innerHTML = `<h2>Sorted Array:</h2> ${sortedArrayHtml}`;
});

function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));
  return merge(left, right);
}

function merge(left, right) {
  const result = [];
  while (left.length > 0 && right.length > 0) {
    if (left[0] <= right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }
  return result.concat(left).concat(right);
}

// Time complexity calculator
timeComplexityCalculator.addEventListener('click', () => {
  const arraySize = arrayInput.value.split(',').length;
  const timeComplexity = Math.log2(arraySize) * arraySize;
  alert(`Time complexity: O(${timeComplexity})`);
});