import firebase from "firebase/app";
import 'firebase/database';
import moment from 'moment';

const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APPID,
    measurementId: process.env.FIREBASE_MEASUREMENT_ID
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  //firebase.analytics();

const database = firebase.database()

export {firebase, database as default};


// // database.ref().set({
// //       name:'debarghya goswami',
// //       age: 33,
// //       isSingle: false,
// //       stressLevel: 6,
// //       job: {
// //         title: 'software developer',
// //         company: 'google'
// //       },
// //       location: {
// //           city: 'coral springs',
// //           country:'united states'
// //       }
// //   }).then(() => {
// //     console.log('data saved')
// //   }).catch((e) => {
// //     console.log('*** Error: ' + e);
// //   })

// // database.ref('attributes').set({
// //     height: '5.11 inch',
// //     weight: '95 kg'
// // }).then(() => {
// //   console.log('data updated')
// // }).catch((e) => {
// //   console.log('*** Error in update ' + e);
// // });

// // database.ref('isSingle')
// // .remove()
// // .then(() => {
// //   console.log('isSingle removed');
// // }).catch((e) => {
// //   console.log('isSingle not removed due to error: ' + e);
// // })

// // database.ref().update({
// //   stressLevel: 9,
// //   'job/company': 'amazon',
// //   'location/city': 'seattle'
// // })
// // .then(() => {
// //   console.log('update worked fine')
// // })
// // .catch((e) => {
// //   console.log('*** update error: ' , e);
// // })

// // const onValuechange = database.ref().on('value', (snapshot) => {
// //   let data = snapshot.val()
// //   console.log(data.name + ' is a ' + data.job.title + ' at ' + data.job.company);
// // }, (e) => {
// //   console.log('Error fetching data ', e)
// // })

// //database.ref().off(onValuechange)

// // database.ref('expenses').push({
// //   description: 'Gum',
// //   note: '',
// //   amount: 2300,
// //   createdAt: -909
// // }).then(() => {
// //   console.log('Value Saved');
// // });

// // database.ref('expenses').push({
// //   description: 'Rent',
// //   note: '',
// //   amount: 132800,
// //   createdAt: 100000
// // }).then(() => {
// //   console.log('Value Saved');
// // });

// // database.ref('expenses').push({
// //   description: 'Credit card',
// //   note: '',
// //   amount: 32800,
// //   createdAt: 34567
// // }).then(() => {
// //   console.log('Value Saved');
// // });

// // database.ref('expenses').once('value')
// // .then((snapshot) => {
// //   const expenseList = [];
// //   snapshot.forEach((childSnapshot) => {
// //     expenseList.push({
// //       id:childSnapshot.key,
// //       ...childSnapshot.val()
// //     })
// //   })
// //   console.log(expenseList);
// // })

// // database.ref('expenses').on('value', (snapshot) => {
// //   const expenseList = [];
// //   snapshot.forEach((childSnapshot) => {
// //     expenseList.push({
// //       id: childSnapshot.id,
// //       ...childSnapshot.val()
// //     })
// //   })
// //   console.log(expenseList);
// // })

// database.ref('expenses').on('child_changed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// })