document.addEventListener("DOMContentLoaded", () => {
    const stickyBox = document.getElementById("stickyBox");
    const headerHeight = 80; // height of your sticky header
    const originalParent = stickyBox.parentNode;
    const placeholder = document.createElement("div");
    placeholder.style.height = stickyBox.offsetHeight + "px";
  
    let isFixed = false;
  
    // Get position relative to document
    const getOffsetTop = (el) => {
      let top = 0;
      while (el) {
        top += el.offsetTop;
        el = el.offsetParent;
      }
      return top;
    };
  
    const stickyStart = getOffsetTop(stickyBox) - headerHeight;
  
    window.addEventListener("scroll", () => {
      const scrollY = window.scrollY;
  
      if (scrollY >= stickyStart && !isFixed) {
        // Fix it to body
        stickyBox.classList.add("fixed-sticky");
        originalParent.insertBefore(placeholder, stickyBox);
        document.body.appendChild(stickyBox);
        stickyBox.style.right = (window.innerWidth - stickyBox.getBoundingClientRect().right) + "px";
        isFixed = true;
      } else if (scrollY < stickyStart && isFixed) {
        // Put it back
        stickyBox.classList.remove("fixed-sticky");
        if (placeholder.parentNode) {
          placeholder.parentNode.removeChild(placeholder);
        }
        originalParent.appendChild(stickyBox);
        stickyBox.style.right = ""; // reset
        isFixed = false;
      }
    });
  });
  