
// import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
// import { getFirestore, collection, addDoc, getDocs, doc ,setDoc, arrayUnion } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

// const firebaseConfig = {
//     apiKey: "AIzaSyAb3BzH5tfNzTuKUDEhVpz51RzPySS5Vfc",
//     authDomain: "dckap-trip-26e10.firebaseapp.com",
//     databaseURL: "https://dckap-trip-26e10-default-rtdb.firebaseio.com",
//     projectId: "dckap-trip-26e10",
//     storageBucket: "dckap-trip-26e10.appspot.com",
//     messagingSenderId: "149435458483",
//     appId: "1:149435458483:web:41d72b11078e86b888e1c6"
// };


// let app = initializeApp(firebaseConfig);
// let db = getFirestore(app);

// // Initialize a variable to keep track of package IDs
// let id = 1;

// document.getElementById('packageForm').addEventListener('submit', async function(event) {
//     event.preventDefault();

//     try {
//         // Fetch the current count of documents in "packages" collection
//         const querySnapshot = await getDocs(collection(db, "packages"));
//         const count = querySnapshot.size;

//         // Get form values
//         let destination = document.getElementById('destination').value.trim();
//         let name = document.getElementById('name').value.trim();
//         let days = parseInt(document.getElementById('days').value.trim());
//         let image = document.getElementById('image').value.trim();
//         let iframeLink = document.getElementById('iframeLink').value.trim();

//         // Array to hold places
//         let places = [];

//         // Fetch all place name and description inputs
//         let placeNameInputs = document.querySelectorAll('.placeName');
//         let placeDescriptionInputs = document.querySelectorAll('.placeDescription');

//         // Iterate over each place input and create place object
//         for (let i = 0; i < placeNameInputs.length; i++) {
//             let placeName = placeNameInputs[i].value.trim();
//             let placeDescription = placeDescriptionInputs[i].value.trim();
//             places.push({ name: placeName, description: placeDescription });
//         }

//         // Set a reference ID for the package
//         let ref = doc(db, "packages", `${id++}`);

//         // Add package to Firestore with an auto-incrementing ID
//         await setDoc(ref, {
//             destination: destination,
//             name: name,
//             days: days,
//             image: image,
//             places: places,
//             iframeLink: iframeLink
//         });

//         console.log("Package added to Firestore");
//     } catch (error) {
//         console.error('Error adding package:', error);
//     }

//     // Reset the form
//     this.reset();
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

let app = initializeApp(firebaseConfig);
let db = getFirestore(app);

// Function to get the last document ID
async function getLastDocumentId() {
    const querySnapshot = await getDocs(collection(db, "packages"));
    const documents = querySnapshot.docs;
    if (documents.length === 0) return 0; // If there are no documents, start from 0
    return parseInt(documents[documents.length - 1].id); // Get the last document ID
}

// Initialize a variable to keep track of package IDs
let id;

// Get the last document ID when the page loads
getLastDocumentId().then(lastId => {
    id = lastId + 1; // Increment the last ID to get the next available ID
});

document.getElementById('packageForm').addEventListener('submit', async function(event) {
    event.preventDefault();
    
    try {
        // Get form values
        let destination = document.getElementById('destination').value.trim();
        let name = document.getElementById('name').value.trim();
        let days = parseInt(document.getElementById('days').value.trim());
        let image = document.getElementById('image').value.trim();
        let iframeLink = document.getElementById('iframeLink').value.trim();

        // Array to hold places
        let places = [];

        // Fetch all place name and description inputs
        let placeNameInputs = document.querySelectorAll('.placeName');
        let placeDescriptionInputs = document.querySelectorAll('.placeDescription');

        // Iterate over each place input and create place object
        for (let i = 0; i < placeNameInputs.length; i++) {
            let placeName = placeNameInputs[i].value.trim();
            let placeDescription = placeDescriptionInputs[i].value.trim();
            places.push({ name: placeName, description: placeDescription });
        }

        // Set a reference ID for the package
        let ref = doc(db, "packages", `${id++}`);

        // Add package to Firestore with an auto-incrementing ID
        await setDoc(ref, {
            destination: destination,
            name: name,
            days: days,
            image: image,
            places: places,
            iframeLink: iframeLink
        });

        console.log("Package added to Firestore");
    } catch (error) {
        console.error('Error adding package:', error);
    }

    // Reset the form
    this.reset();
});
