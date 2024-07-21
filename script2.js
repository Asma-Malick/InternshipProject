document.addEventListener("DOMContentLoaded", function() {
    const serviceLinks = document.querySelectorAll(".nu a"); // Targeting only the service card links
    const serviceCards = document.querySelectorAll(".service-card");
  
    serviceLinks.forEach(function(link) {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            serviceCards.forEach(function(card) {
                card.classList.remove("active");
            });
            document.getElementById(targetId).classList.add("active");
        });
    });
  });
  
