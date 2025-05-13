// Toggle Profile Dropdown
document.getElementById("profileBtn").addEventListener("click", () => {
    document.getElementById("profileDropdown").classList.toggle("show");
  });
  document.getElementById("profileBtn").addEventListener("click", () => {
    document.getElementById("profileDropdown-phone").classList.toggle("show");
  });
  
  
  // Toggle Program Card
  function toggleCard(header) {
    const body = header.nextElementSibling;
    body.style.display = body.style.display === "block" ? "none" : "block";
  }
  
  // Toggle Side Drawer
//   function toggleDrawer() {
//     document.getElementById("sideDrawer").classList.toggle("open");
//   }

//   const streakTrigger = document.getElementById('streakTrigger'); // the "0/7 days practiced" box
// const sideDrawer = document.getElementById('sideDrawer');
// const overlay = document.getElementById('overlay');

document.addEventListener("DOMContentLoaded", function () {
    const streakTrigger = document.getElementById('streakTrigger');
    const sideDrawer = document.getElementById('sideDrawer');
    const overlay = document.getElementById('overlay');
  
    if (!streakTrigger || !sideDrawer || !overlay) return;
  
    streakTrigger.addEventListener('click', (e) => {
      e.stopPropagation();
      sideDrawer.classList.add('active');
      overlay.classList.add('active');
    });
  
    overlay.addEventListener('click', () => {
      sideDrawer.classList.remove('active');
      overlay.classList.remove('active');
    });
  
    document.addEventListener('click', (e) => {
      if (
        !sideDrawer.contains(e.target) &&
        !streakTrigger.contains(e.target)
      ) {
        sideDrawer.classList.remove('active');
        overlay.classList.remove('active');
      }
    });
  });





    document.addEventListener("DOMContentLoaded", function () {
        const toggleBtn = document.getElementById("toggleSidebar");
        const sidebar = document.getElementById("leftSidebar");

        toggleBtn.addEventListener("click", () => {
            sidebar.classList.toggle("hidden");
        });
    });


    document.addEventListener('DOMContentLoaded', () => {
      const tabButtons = document.querySelectorAll('[data-target]');
      const tabContents = document.querySelectorAll('.tab-content');
    
      const resumeBtn = document.getElementById('resumeLearningBtn');
      const progressCard = document.getElementById('progressCard');
    
      tabButtons.forEach(button => {
        button.addEventListener('click', () => {
          const target = button.getAttribute('data-target');
    
          // Activate tab
          tabContents.forEach(content => content.classList.remove('active'));
          document.getElementById(target).classList.add('active');
    
          tabButtons.forEach(btn => btn.classList.remove('active'));
          button.classList.add('active');
    
          // Conditional visibility logic
          if (target === 'practiceContent') {
            resumeBtn.style.display = 'none';
            progressCard.style.display = 'none';
          } else {
            resumeBtn.style.display = 'inline-block';
            progressCard.style.display = 'block';
          }
        });
      });
    });
    


    function toggleModule(element) {
      element.parentElement.classList.toggle("open");
    }



    document.querySelectorAll('[data-toggle]').forEach(toggle => {
      toggle.addEventListener('click', () => {
        const moduleCard = toggle.closest('.module-card');
        const content = moduleCard.querySelector('.module-content');
        const isOpen = content.style.display !== 'none';
    
        // Toggle display
        content.style.display = isOpen ? 'none' : 'block';
    
        // Toggle arrow direction
        toggle.classList.toggle('rotate', !isOpen);
      });
    });
    
    // Optional: keep first module open by default
    document.querySelectorAll('.module-content').forEach((el, i) => {
      if (i !== 0) el.style.display = 'none';
    });
    

    const tabs = document.querySelectorAll('.tab');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    tabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    // add logic to show/hide unresolved/resolved doubts if needed
  });
});



// Elements
const openSettingsIcon = document.querySelector('.settings-icon'); // Replace this selector
const settingsModal = document.querySelector('.settings-modal');
const settingsOverlay = document.querySelector('.settings-overlay');
const closeSettingsBtn = document.querySelector('.close-settings-btn');

// Open modal
openSettingsIcon.addEventListener('click', () => {
  settingsModal.classList.remove('hidden');
  settingsOverlay.classList.remove('hidden');
});

// Close modal
function closeSettings() {
  settingsModal.classList.add('hidden');
  settingsOverlay.classList.add('hidden');
}

closeSettingsBtn.addEventListener('click', closeSettings);





const sidebarBtns = document.querySelectorAll('.settings-sidebar-btn');
const tabContents = document.querySelectorAll('.tab-content');

sidebarBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const selectedTab = btn.getAttribute('data-tab');

    // Toggle active sidebar button
    sidebarBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    // Show corresponding tab content
    tabContents.forEach(content => {
      if (content.getAttribute('data-tab') === selectedTab) {
        content.classList.add('active');
      } else {
        content.classList.remove('active');
      }
    });
  });
});


document.querySelectorAll('.switch input').forEach(toggle => {
  toggle.addEventListener('change', () => {
    console.log('Toggle changed:', toggle.checked);
  });
});