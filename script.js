document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
      const introMessage = document.getElementById("introMessage");
      if (introMessage) {
        introMessage.classList.add("show");
      }
    }, 1000); 
  });