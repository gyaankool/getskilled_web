// document.getElementById('hamburger').addEventListener('click', () => {
//     document.getElementById('sidebar').classList.add('active');
//   });
  
//   document.getElementById('closeSidebar').addEventListener('click', () => {
//     document.getElementById('sidebar').classList.remove('active');
//   });

  document.addEventListener('click', () => {
          sidebar.classList.remove('active');
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
          