// antes

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

// let i = 1;
// let j = 7;
// checkiandj:
// while (i < 4) {
//   document.write(i + "a<br>");
//   i += 1;

//   checkj:
//   while (j > 4) {
//     document.write(j + "b<br>");
//     j -= 1;
//     if ((j % 2) == 0)
//       continue checkj;
//     document.write(j + "c is odd.<br>");
//   }
//   document.write("i = " + i + "d<br>");
//   document.write("j = " + j + "e<br>");
// }

checkiandj:
while (i < 4) {
  document.write(i + "<br>");
  i += 1;
  continue
  checkj:
  while (j > 4) {
    document.write(j + "<br>");
    j -= 1;
    if ((j % 2) == 0)
      continue checkj;
    document.write(j + " is odd.<br>");
  }
  document.write("i = " + i + "<br>");
  document.write("j = " + j + "<br>");
}