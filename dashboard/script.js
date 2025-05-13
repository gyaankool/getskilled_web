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