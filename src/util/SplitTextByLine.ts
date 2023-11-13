export const splitTextByLine = (
  text: string | undefined = undefined,
  maxLength: number
): Array<string> => {
  if(text == undefined) return []
  const words = text.split(" ");
  const result = [];
  let currentLine = "";

  words.forEach((word) => {
    if (currentLine.length + word.length < maxLength) {
      currentLine += `${word} `;
    } else {
      result.push(currentLine);
      currentLine = "";
    }
  });

  if (currentLine.length > 0) {
    result.push(currentLine);
  }
  return result;
};
