import { initializeApp } from 'firebase/app'

const firebaseConfig = {
  apiKey: 'AIzaSyAIPgeSd6diVazFJTK3zdQBIJP9ICGppGA',
  authDomain: 'teddyshop-bcf91.firebaseapp.com',
  projectId: 'teddyshop-bcf91',
  storageBucket: 'teddyshop-bcf91.appspot.com',
  messagingSenderId: '442606598772',
  appId: '1:442606598772:web:edf6462aecd3243900af21',
  measurementId: 'G-ZW90L4SN5X'
}

// Initialize Firebase
export const app = initializeApp(firebaseConfig)
