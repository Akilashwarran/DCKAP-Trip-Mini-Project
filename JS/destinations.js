// document.addEventListener("DOMContentLoaded", function() {
//     // Function to generate package card HTML
//     function createPackageCard(destination, packageName, duration, imageUrl) {
//         const packageCard = document.createElement('div');
//         packageCard.classList.add('w-72', 'package-card', 'h-72', 'bg-white', 'shadow-md', 'rounded-xl', 'duration-500', 'hover:scale-105', 'hover:shadow-xl');
        
//         const link = document.createElement('a');
//         link.setAttribute('href', 'destiresults.html');
        
//         const image = document.createElement('img');
//         image.setAttribute('src', imageUrl);
//         image.setAttribute('alt', 'Product');
//         image.classList.add('h-50', 'w-74', 'object-cover', 'rounded-t-xl');
        
//         const detailsContainer = document.createElement('div');
//         detailsContainer.classList.add('px-4', 'py-3', 'w-72');
        
//         const destinationSpan = document.createElement('span');
//         destinationSpan.classList.add('destination-name', 'text-gray-400', 'mr-3', 'uppercase', 'text-xs');
//         destinationSpan.textContent = destination;
        
//         const packageNameP = document.createElement('p');
//         packageNameP.classList.add('package-name', 'text-lg', 'font-bold', 'text-black', 'truncate', 'block', 'capitalize');
//         packageNameP.textContent = packageName;
        
//         const durationP = document.createElement('p');
//         durationP.classList.add('no-days', 'text-lg', 'font-semibold', 'text-black', 'cursor-auto', 'my-3');
//         durationP.textContent = duration + ' Days';
        
//         const bagIcon = document.createElement('svg');
//         bagIcon.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
//         bagIcon.setAttribute('width', '20');
//         bagIcon.setAttribute('height', '20');
//         bagIcon.setAttribute('fill', 'currentColor');
//         bagIcon.setAttribute('class', 'bi bi-bag-plus');
//         bagIcon.setAttribute('viewBox', '0 0 16 16');
        
//         const path1 = document.createElement('path');
//         path1.setAttribute('fill-rule', 'evenodd');
//         path1.setAttribute('d', 'M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z');
        
//         const path2 = document.createElement('path');
//         path2.setAttribute('d', 'M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z');
        
//         // Append elements
//         bagIcon.appendChild(path1);
//         bagIcon.appendChild(path2);
        
//         detailsContainer.appendChild(destinationSpan);
//         detailsContainer.appendChild(packageNameP);
//         detailsContainer.appendChild(durationP);
//         detailsContainer.appendChild(bagIcon);
        
//         link.appendChild(image);
//         link.appendChild(detailsContainer);
        
//         packageCard.appendChild(link);
        
//         return packageCard;
//     }
    
//     // Example data
//     const destination = 'Kodaikanal';
//     const packageName = 'Journey to the Heart of the Hills';
//     const duration = 5;
//     const imageUrl = 'Assets/17702.jpg';
    
//     // Get the container element to append the package card
//     const container = document.getElementById('Projects');
    
//     // Create the package card
//     const packageCard = createPackageCard(destination, packageName, duration, imageUrl);
    
//     // Append the package card to the container
//     container.appendChild(packageCard);
// });


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

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// // Function to retrieve packages from Firestore
// async function getPackagesFromFirestore() {
//     try {
//         const querySnapshot = await getDocs(collection(db, "packages"));
//         const packages = [];
//         querySnapshot.forEach((doc) => {
//             packages.push({
//                 id: doc.id,
//                 data: doc.data()
//             });
//         });
//         return packages;
//     } catch (error) {
//         console.error("Error getting packages:", error);
//         return [];
//     }
// }

// // Usage example
// getPackagesFromFirestore().then(packages => {
//     console.log("Packages from Firestore:", JSON.stringify(packages, null, 2));
// });
// --------------
document.addEventListener("DOMContentLoaded", async function() {
    // Function to generate package card HTML
    function createPackageCard(packageData) {
        const { destination, name, days, image, places } = packageData;
        console.log(packageData)
        const packageCard = document.createElement('div');
        packageCard.classList.add('w-72', 'package-card', 'h-72', 'bg-white', 'shadow-md', 'rounded-xl', 'duration-500', 'hover:scale-105', 'hover:shadow-xl');

        const img = document.createElement('img');
        img.setAttribute('src', image);
        img.setAttribute('alt', name);
        img.classList.add('h-50', 'w-74', 'object-cover', 'rounded-t-xl');

        const detailsContainer = document.createElement('div');
        detailsContainer.classList.add('px-4', 'py-3', 'w-72');

        const destinationSpan = document.createElement('span');
        destinationSpan.classList.add('destination-name', 'text-gray-400', 'mr-3', 'uppercase', 'text-xs');
        destinationSpan.textContent = destination;

        const packageNameP = document.createElement('p');
        packageNameP.classList.add('package-name', 'text-lg', 'font-bold', 'text-black', 'truncate', 'block', 'capitalize');
        packageNameP.textContent = name;

        const durationP = document.createElement('p');
        durationP.classList.add('no-days', 'text-lg', 'font-semibold', 'text-black', 'cursor-auto', 'my-3');
        durationP.textContent = days + ' Days';

        // Append elements
        detailsContainer.appendChild(destinationSpan);
        detailsContainer.appendChild(packageNameP);
        detailsContainer.appendChild(durationP);

        packageCard.appendChild(img);
        packageCard.appendChild(detailsContainer);

        // Attach click event listener to the package card
        packageCard.addEventListener('click', function() {
            // Save package data to sessionStorage
            sessionStorage.setItem('selectedPackage', JSON.stringify(packageData));

            // Redirect to destiresults.html
            window.location.href = 'destiresults.html';
        });

        return packageCard;
    }

    // Get the container element to append the package cards
    const container = document.getElementById('Projects');

    // Fetch package data from Firestore
    async function fetchPackageDataFromFirestore() {
        try {
            const querySnapshot = await getDocs(collection(db, "packages"));
            const packageData = querySnapshot.docs.map(doc => doc.data());
            return packageData;
        } catch (error) {
            console.error('Error fetching package data:', error);
            return [];
        }
    }

    // Fetch package data and create cards
    const packageData = await fetchPackageDataFromFirestore();
    packageData.forEach(data => {
        const packageCard = createPackageCard(data);
        container.appendChild(packageCard);
    });
});


function searchdes(){
    var search = document.getElementById('dest-search').value;
    search = search.toLowerCase();
    let dest_name = document.getElementsByClassName('destination-name')
    let package_crd = document.getElementsByClassName('package-card')
    for(var i=0; i<dest_name.length;i++){
        if(!dest_name[i].innerHTML.toLowerCase().includes(search)){
            package_crd[i].style.display ='none';
        }
        else{
            package_crd[i].style.display ='block'
        }
    }
}
