// JavaScript to delay the animation of navigation
window.onload = function() {
    var listItems = document.querySelectorAll('.title-bar nav ul li');
    listItems.forEach(function(item, index) {
        if (index !== 0) { // Delay all list items except the first one
            item.style.animationDelay = (index * 0.3) + 's'; // Delay animation for each item
        }
    });

    // Show the title and the first list item after a delay to synchronize with the title bar animation
    setTimeout(function() {
        var title = document.querySelector('.title-bar h1');
        var firstListItem = document.querySelector('.title-bar nav ul li');
        title.style.opacity = '1';
        firstListItem.style.opacity = '1';
    }, 50);

    // JavaScript to trigger photograph animation
    var photograph = document.getElementById('movingPhotograph');
    setTimeout(function() {
    photograph.style.top = '50px'; // Move photograph up to another fixed height
    }, 100);

};

function openContactForm() {
    document.getElementById('contactForm').style.display = 'block';
}

function closeContactForm() {
    document.getElementById('contactForm').style.display = 'none';
}



document.addEventListener('DOMContentLoaded', function() {
    // Get all details elements
    var detailsElements = document.querySelectorAll('.card1');
  
    // Add click event listener to each details element
    detailsElements.forEach(function(details) {
      details.addEventListener('click', function() {
        // Close all other details elements
        detailsElements.forEach(function(otherDetails) {
          if (otherDetails !== details && otherDetails.open) {
            otherDetails.open = false;
          }
        });
      });
    });
  });
  
  