
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs, doc ,setDoc, arrayUnion } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";
const firebaseConfig = {
    apiKey: "AIzaSyAb3BzH5tfNzTuKUDEhVpz51RzPySS5Vfc",
    authDomain: "dckap-trip-26e10.firebaseapp.com",
    databaseURL: "https://dckap-trip-26e10-default-rtdb.firebaseio.com",
    projectId: "dckap-trip-26e10",
    storageBucket: "dckap-trip-26e10.appspot.com",
    messagingSenderId: "149435458483",
    appId: "1:149435458483:web:41d72b11078e86b888e1c6"
  };



document.addEventListener("DOMContentLoaded", function() {
    // Retrieve package data from sessionStorage
    const packageData = JSON.parse(sessionStorage.getItem('selectedPackage'));
    
    // Print packageData to console
    console.log(packageData);
});
document.addEventListener("DOMContentLoaded", function() {
    // Retrieve package data from sessionStorage
    const packageData = JSON.parse(sessionStorage.getItem('selectedPackage'));
    
    // Select the elements by class name
    const destinationNameElement = document.querySelector('.destinationName');
    const packageNameElement = document.querySelector('.packagename');

    // Update the text content of the elements with data from packageData
    if (destinationNameElement && packageNameElement && packageData) {
        destinationNameElement.textContent = packageData.destination;
        packageNameElement.textContent = `"${packageData.name}"`;
    }
});
document.addEventListener("DOMContentLoaded", function() {
    // Retrieve package data from sessionStorage
    const packageData = JSON.parse(sessionStorage.getItem('selectedPackage'));

    // Select the trip-details container
    const tripDetailsContainer = document.getElementById('trip-details');

    // Function to create place card HTML
    function createPlaceCard(place, dayNumber) {
        const placeCard = document.createElement('section');
        placeCard.classList.add('container');

        const card = document.createElement('div');
        card.classList.add('card');

        const content = document.createElement('div');
        content.classList.add('content');

        const dayCount = document.createElement('p');
        dayCount.classList.add('day-count', 'logo');
        dayCount.textContent = 'Day ' + dayNumber;

        const placeName = document.createElement('div');
        placeName.classList.add('place-name', 'h6');
        placeName.textContent = place.name;

        const hoverContent = document.createElement('div');
        hoverContent.classList.add('hover_content');

        const placeDescription = document.createElement('p');
        placeDescription.classList.add('place-description');
        placeDescription.textContent = place.description;

        hoverContent.appendChild(placeDescription);

        content.appendChild(dayCount);
        content.appendChild(placeName);
        content.appendChild(hoverContent);

        card.appendChild(content);

        placeCard.appendChild(card);

        return placeCard;
    }

    // Create place cards for each place in packageData
    if (packageData && packageData.places) {
        packageData.places.forEach((place, index) => {
            const placeCard = createPlaceCard(place, index + 1);
            tripDetailsContainer.appendChild(placeCard);
        });
    }
});



// ------------------------------------------------------
// Assuming you have already included the Google Maps API script tag in your HTML with a valid API key
document.addEventListener('DOMContentLoaded', function() {
    initMap(); // Initialize map when document is ready
});

function initMap() {
    console.log('test')
    var selectedPackage = JSON.parse(sessionStorage.getItem('selectedPackage'));
    if (!selectedPackage || !selectedPackage.places || selectedPackage.places.length < 2) {
        console.error('Invalid or insufficient data in selected package');
        return;
    }

    var places = selectedPackage.places;
    var origin = places[0].name + ', Tamil Nadu, India';
    var destination = places[places.length - 1].name + ', Tamil Nadu, India';
    var waypoints = places.slice(1, -1).map(place => ({ location: place.name + ', Tamil Nadu, India', stopover: true }));

    var map = new google.maps.Map(document.getElementById('pic'), {
        
    });
    
    var directionsService = new google.maps.DirectionsService();
    var directionsRenderer = new google.maps.DirectionsRenderer();
    directionsRenderer.setMap(map);

    var request = {
        origin: origin,
        destination: destination,
        waypoints: waypoints,
        travelMode: google.maps.TravelMode.DRIVING,
    };

    directionsService.route(request, (result, status) => {
        if (status === google.maps.DirectionsStatus.OK) {
            directionsRenderer.setDirections(result);
        } else {
            console.error('Directions request failed due to ' + status);
        }
    });
}

