import toUpper from 'lodash/toUpper';

export default tag => {
  const newTag = tag.replace(/\s+/g, ' ').trim();
  const words = newTag.split(' ');
  const upperCaseWords = words.map(word => toUpper(word));
  const preparedTag = upperCaseWords.join('   ');
  return preparedTag;
};
