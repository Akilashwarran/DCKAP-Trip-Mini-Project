
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs, doc ,setDoc, arrayUnion } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";
const firebaseConfig = {
    apiKey: "AIzaSyBl2nSsWE6IwcC3uPUZF7bgStLcoWJQ2g4",
    authDomain: "dckaptrip-2.firebaseapp.com",
    projectId: "dckaptrip-2",
    storageBucket: "dckaptrip-2.appspot.com",
    messagingSenderId: "1003076308711",
    appId: "1:1003076308711:web:ebe6bf59db2211fad0dc42"
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
