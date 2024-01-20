document.addEventListener('DOMContentLoaded', function() {
    // Hide the list items initially
    var destinationList = document.getElementById('destinationList');
    var destinations = destinationList.getElementsByTagName('li');
  
    for (var i = 0; i < destinations.length; i++) {
      destinations[i].style.display = 'none';
    }
  });
  
  function searchDestinations() {
    var input = document.getElementById('searchInput').value.toLowerCase();
    var destinationList = document.getElementById('destinationList');
    var destinations = destinationList.getElementsByTagName('li');
  
    for (var i = 0; i < destinations.length; i++) {
      var destination = destinations[i].textContent.toLowerCase();
      if (destination.includes(input)) {
        destinations[i].style.display = 'block';
      } else {
        destinations[i].style.display = 'none';
      }
    }
  }