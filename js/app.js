//antes
// let arr1 = [1,2,3,4];
// function getClothing(isCold) {
//   if (isCold) {
//     var freezing = 'Lleva una chaqueta';
//   } else {
//     var hot = 'Usa short';
//     console.log(freezing);
//   }
// }

// getClothing(false)

// Ahora

// function getClothing(isCold) {
//   if (isCold) {
//     let freezing = 'Lleva una chaqueta';
//   } else {
//     let hot = 'Usa short';
//     console.log(freezing);
//   }
// }

// getClothing(false)

//Label

// outerloop:  // This is the label name  
// for (var i = 0; i < 3; i++) {
//   console.log("Outerloop: " + i);

//   for (var j = 0; j < 5; j++) {
//     if (j == 3) {
//       continue outerloop;
//     }
//     console.log("Innerloop: " + j);
//   }
// }

// const findEvenNumber = arr => {
//   loop: { // label
//     for (let i = 0, l = arr.length; i < l; i++) {
//       let element = arr[i];
//       if (element % 2 === 0) {
//         console.log(`Found: ${element}`);
//         break loop;
//       }
//     }
//     console.log('No even number found.');
//   }
//   console.log('DONE');
// };
// findEvenNumber([1,2,3,4,5])