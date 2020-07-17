// [10, 15, 3, 7]
// 17


export const checkTwoNumbersFromListAddUpToNumber = (list, desiredNumber) => {

  let foundValue = false;
  for (let i = 0; i < list.length; i++) {
    for (let j = 0; j < list.length - 1; j++) {
      if ((list[i] + list[j]) === desiredNumber) {
        foundValue = true;
        break;
      }
    }
  }

  return foundValue;

  // const l = list.reduce((previous, current, currentIdx) => {
  //   list
  //     .filter((val, idx) => idx !== currentIdx)
  //     .map(val => val + current === desiredNumber)
  //   // if (previous[1])
  //   //   return [current, true];

  //   // if (previous[0] + current === desiredNumber)
  //   //   return [current, true]

  //   // return [current, false];
  // }, [0, false]);

  // console.log(l);

  // return l[1];
}