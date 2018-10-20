import toUpper from 'lodash/toUpper';

export const prepareTag = (tag) => {
  const tagTrim = tag.trim();
  const words = tagTrim.split(" ");
  const upperCaseWords = words.map(word => toUpper(word));
  const newTag = upperCaseWords.join("   ");
  return newTag;
}