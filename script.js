// DOM elements
const openModalBtn = document.getElementById('openModalBtn');
const modal = document.getElementById('signupModal');
const signupForm = document.getElementById('signupForm');

// Function to open the modal
function openModal() {
  modal.style.display = 'block';
}

// Function to close the modal
function closeModal() {
  modal.style.display = 'none';
}

// Function to handle form submission
function handleSubmit(event) {
  event.preventDefault();
  const formData = new FormData(signupForm);
  const data = {};

  for (const [key, value] of formData.entries()) {
    data[key] = value;
  }

  // You can now print the data to the console or perform other actions with it
  console.log(data);
  closeModal();
}

// Event listeners
openModalBtn.addEventListener('click', openModal);
signupForm.addEventListener('submit', handleSubmit);
