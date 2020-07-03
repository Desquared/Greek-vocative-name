import {isNotEmptyString, isGreekVowel, isGreekVowelWithIntonation, isRuleExclution} from './utilities';

export function getVocativeName(text) {
  if (!isNotEmptyString(text)) {
    return text;
  }
  let syllabusCount = 0;
  let tonosPoint = -1;
  // capitalise first letter
  text = text.toLowerCase();
  text = text.substring(0, 1).toUpperCase() + text.substring(1);
  switch (text.substring(text.length - 2)) {
    case 'άς':
    case 'ας':
    case 'ής':
    case 'ης':
      return text.substring(0, text.length - 1);
    case 'ος':
      // Γνωστές εξαιρέσεις
      if (text === 'Στέλιος') {
        return 'Στέλιο';
      }
      for (let i = 0; i < text.length; i++) {
        if (isGreekVowel(text.charAt(i))) {
          syllabusCount++;
        }
        if (isGreekVowelWithIntonation(text.charAt(i))) {
          tonosPoint = syllabusCount;
        }
      }
      if (syllabusCount - tonosPoint > 1 || isRuleExclution(text.charAt(text.length - 3), syllabusCount)) {
        //το ος γίνεται ε
        return text.substring(0, text.length - 2) + 'ε';
      }
      //το ος γίνεται ο
      return text.substring(0, text.length - 2) + 'ο';
    case 'ός':
      // Γνωστές εξαιρέσεις (οξύτονα χαϊδευτικά βαφτιστικά ονόματα)
      if (text === 'Δημητρός') {
        return 'Δημητρό';
      }
      if (text === 'Μανολιός') {
        return 'Μανολιό';
      }
      if (text === 'Μανωλιός') {
        return 'Μανωλιό';
      }
      return text.substring(0, text.length - 2) + 'έ';
    default:
      return text;
  }
}
