// ! AdventJS 

// ? 1

// function findFirstRepeatedNumber(gifts) {
//   const idMap = new Map();


//   for (let i = 0; i < gifts.length; i++) {
//     if (idMap.has(gifts[i])) {
//       return gifts[i];
//     } else {
//       idMap.set(gifts[i], i);
//     }
//   }

//   return -1;
// }



// ? 2

// function manufacture(gifts, materials) {
//     const result = [];

//     for (const gift of gifts) {
//         const giftMaterials = new Set(gift);
//         let canMake = true;
        
//         for (const char of giftMaterials) {
//             if (!materials.includes(char)) {
//                 canMake = false;
//                 break;
//             }
//         }

//         if (canMake) {
//             result.push(gift);
//         }
//     }

//     return result;
// }


// ? 3

// function findExtraStep(originalSteps, modifiedSteps) {

//     for(let i = 0; i < Math.max(originalSteps.length, modifiedSteps.length); i++) {

//         if(originalSteps[i] !== modifiedSteps[i]) {
//             return modifiedSteps[i];
//         }
//     }
// }
// let originalSteps = ['cut wood', 'paint', 'assemble'];
// let modifiedSteps = ['cut wood',  'paint',"aas", 'assemble'];


// ? 4

// function decode(message) {
//     const stack = [];
//     let result = '';

//     for (let char of message) {
//         if (char === '(') {
//             stack.push(result);
//             result = '';
//         } else if (char === ')') {
//             result = stack.pop() + result.split('').reverse().join('');
//         } else {
//             result += char;
//         }
//     }

//     return result;
// }



// ? 6

// function maxDistance(movements) {
//     let distance = 0; 
//     let maxDistance = -1; 
    
//     for (let move of movements) {
//         if (move === '>') {
//             distance++; 
//         } else if (move === '<') {
//             distance--;
//         } else if (move === '*') {

//             if (distance >= 0) {
//                 distance++; 
//             } else {
//                 distance--;
//             }
//         }

//         maxDistance = Math.max(maxDistance, Math.abs(distance));
//     }

//     return maxDistance;
// }



// ? 

// function makeGifts(gifts, materials) {
//   const giftsCanBeMade = [];

//   for (let i = 0; i < gifts.length; i++) {
//       const giftMaterials = gifts[i].split('');
//       let canMakeGift = true;


//       for (let j = 0; j < giftMaterials.length; j++) {
//           if (!materials.includes(giftMaterials[j])) {
//               canMakeGift = false;
//               break;
//           }
//       }


//       if (canMakeGift) {
//           giftsCanBeMade.push(gifts[i]);
//       }
//   }

//   return giftsCanBeMade;
// }



// ? 13

// function calculateTime(deliveries) {

//     const totalSeconds = deliveries.reduce((acc, duration) => {
//         const [hours, minutes, seconds] = duration.split(':').map(Number);
//         return acc + hours * 3600 + minutes * 60 + seconds;
//     }, 0);


//     const timeLimitSeconds = 7 * 3600;


//     const remainingSeconds = timeLimitSeconds - totalSeconds;


//     const sign = remainingSeconds >= 0 ? '' : '-';
//     const absoluteSeconds = Math.abs(remainingSeconds);
//     const hours = Math.floor(absoluteSeconds / 3600);
//     const minutes = Math.floor((absoluteSeconds % 3600) / 60);
//     const seconds = absoluteSeconds % 60;

//     const formattedTime = `${sign}${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    
//     return formattedTime;
// }