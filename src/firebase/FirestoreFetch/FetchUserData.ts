// import { useEffect, useState } from 'react';
// import { doc, getDoc } from 'firebase/firestore';
// import { auth, db } from '../firebaseConfig';

// const fetchUserData = async () => {
//     const user = auth.currentUser;
//     if (user) {
//         const userDocRef = doc(db, 'users', user.uid);
//         const userDocSnap = await getDoc(userDocRef);
//         if (userDocSnap.exists()) {
//             console.log('User data:', userDocSnap.data());
//             // Handle the user data as needed
//         } else {
//             console.log('No such document!');
//         }
//     }
// };

// useEffect(() => {
//     fetchUserData();
// }, []);
