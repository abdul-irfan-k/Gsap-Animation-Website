export const ArrayTextFillCalculation = (
  arrayLength: number,
  index: number,
  currentFillProgress: number
): number => {
  const isLastIndex = index + 1 == arrayLength;
  const currentIndex = index;

  const calculation =
    (currentFillProgress - currentIndex * (100 / arrayLength)) * arrayLength;

  const isRequiredToFill: boolean =
    100 - (arrayLength - currentIndex) * (100 / arrayLength) <=
    currentFillProgress;

  const fillState = isRequiredToFill ? calculation : 0;
  return fillState;
};








// const isLastIndex = index + 1 == lines.length;
// const currentIndex = isLastIndex ? index : index + 1;

// const calculation =
//   (textFillProgress - currentIndex * (100 / lines.length)) *
//   lines.length;

// const isRequiredToFill: boolean =
//   100 - (lines.length - currentIndex) * (100 / lines.length) <=
//   textFillProgress;
// // const isRequiredToFill: boolean = isLastIndex
// //   ? (100 / lines.length) * index < fillState
// //   : 100 - (lines.length - currentIndex) * (100 / lines.length) <=
// //     textFillProgress;

// const fillState = isRequiredToFill ? calculation : 0;
