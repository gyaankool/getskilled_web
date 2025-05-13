function togglePanel(topicEl) {
  const panel = topicEl.nextElementSibling;
  const arrow = topicEl.querySelector('.arrow');

  const isOpen = panel.style.display === 'block';

  // Close all panels
  document.querySelectorAll('.content-panel').forEach(p => p.style.display = 'none');
  document.querySelectorAll('.arrow').forEach(a => a.classList.remove('rotate'));

  if (!isOpen) {
    panel.style.display = 'block';
    arrow.classList.add('rotate');
  }
}

function switchTab(event, tabType) {
  const container = event.target.closest('.content-panel');

  // Toggle tab active classes
  container.querySelectorAll('.tab').forEach(tab => tab.classList.remove('active'));
  event.target.classList.add('active');

  // Toggle content visibility
  container.querySelector('.videos').classList.remove('active');
  container.querySelector('.pdfs').classList.remove('active');

  if (tabType === 'videos') {
    container.querySelector('.videos').classList.add('active');
  } else {
    container.querySelector('.pdfs').classList.add('active');
  }
}



document.addEventListener('click', function (e) {
  document.querySelectorAll('.dropdown').forEach(dropdown => {
    const toggle = dropdown.querySelector('.dropdown-toggle');

    if (toggle && toggle.contains(e.target)) {
      // Toggle the clicked dropdown
      dropdown.classList.toggle('show');
    } else {
      // Close all other dropdowns
      dropdown.classList.remove('show');
    }
  });
});


// Highlight selected radio box
// Apply .selected on page load
document.querySelectorAll('.level-option').forEach(option => {
  const input = option.querySelector('input[type="radio"]');
  if (input.checked) {
    option.classList.add('selected');
  } else {
    option.classList.remove('selected');
  }
});

// Update on click
document.querySelectorAll('.level-option').forEach(option => {
  option.addEventListener('click', () => {
    document.querySelectorAll('.level-option').forEach(opt => opt.classList.remove('selected'));
    option.classList.add('selected');
    option.querySelector('input[type="radio"]').checked = true;
  });
});

// Sample button handler
// function createCourse() {
//   const goal = document.getElementById('goal').value.trim();
//   const topics = document.getElementById('topics').value.trim();
//   const level = document.querySelector('input[name="level"]:checked')?.value;

//   if (!goal || !topics) {
//     alert('Please fill in all fields.');
//     return;
//   }

//   alert(`Creating course for:\n- Goal: ${goal}\n- Topics: ${topics}\n- Level: ${level}`);
// }

document.querySelector('.create-course-btn').addEventListener('click', createCourse);

function createCourse() {
  const goal = document.getElementById('goal').value.trim();
  const topics = document.getElementById('topics').value.trim();
  const level = document.querySelector('input[name="level"]:checked')?.value;

  // Optional validation
  // if (!goal || !topics || !level) {
  //   alert('Please fill in all fields.');
  //   return;
  // }

  // Show loader
  document.getElementById('loader-overlay').classList.remove('hidden');

  // After 4 seconds
  setTimeout(() => {
    document.getElementById('loader-overlay').classList.add('hidden');

    // Show the generated course section
    const courseSection = document.getElementById('course-section');
    courseSection.classList.add('visible');

    // Scroll to it
    courseSection.scrollIntoView({ behavior: 'smooth' });

  }, 3000);
}


function toggleMobileMenu() {
  const nav = document.getElementById("mobileNav");
  nav.style.display = nav.style.display === "flex" ? "none" : "flex";
}

function toggleMobileDropdown(event, dropdownId) {
  event.preventDefault();
  const dropdown = document.getElementById(dropdownId);
  dropdown.style.display =
      dropdown.style.display === "flex" ? "none" : "flex";
}
  
