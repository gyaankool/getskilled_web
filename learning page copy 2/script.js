// document.getElementById('hamburger').addEventListener('click', () => {
//     document.getElementById('sidebar').classList.add('active');
//   });
  
//   document.getElementById('closeSidebar').addEventListener('click', () => {
//     document.getElementById('sidebar').classList.remove('active');
//   });
  
  
  

  document.getElementById("profileBtn").addEventListener("click", () => {
    document.getElementById("profileDropdown").classList.toggle("show");
  });

  
  document.addEventListener("DOMContentLoaded", function () {
    const tabButtons = document.querySelectorAll(".tab-button");
    const tabContents = document.querySelectorAll(".tab-content");
  
    tabButtons.forEach(button => {
      button.addEventListener("click", () => {
        const target = button.dataset.tab;
  
        tabButtons.forEach(btn => btn.classList.remove("active"));
        tabContents.forEach(content => content.style.display = "none");
  
        button.classList.add("active");
        const contentToShow = document.getElementById(target);
        if (contentToShow) contentToShow.style.display = "block";
      });
    });
  
    // Initial content setup
    const defaultButton = document.querySelector(".tab-button.active");
    if (defaultButton) {
      const defaultContent = document.getElementById(defaultButton.dataset.tab);
      if (defaultContent) defaultContent.style.display = "block";
    }
  });







  

  document.addEventListener('DOMContentLoaded', () => {
    const sidebar = document.getElementById('sidebar');
    const hamburger = document.getElementById('hamburger');
  
    if (!sidebar || !hamburger) {
      console.warn('Sidebar or hamburger element not found');
      return;
    }
  
    hamburger.addEventListener('click', (e) => {
      e.stopPropagation();
      sidebar.classList.add('active');
    });
  
    sidebar.addEventListener('click', (e) => {
      e.stopPropagation();
    });
  
    document.addEventListener('click', () => {
      sidebar.classList.remove('active');
    });
  });
  
  
  

  