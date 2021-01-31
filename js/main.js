function openNav() {
    document.getElementById("mySidenav").style.width = "100%";
  }
  
  /* Close/hide the sidenav */
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }

  window.addEventListener("scroll", function() {
      let header = document.querySelector(".icigai-header");
      header.classList.toggle("sticky", window.scrollY > 0);
  })