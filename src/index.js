import {
  isNotEmptyString,
  isGreekVowel,
  isGreekVowelWithIntonation,
  isGreekSigma,
  isRuleEligible,
  isRuleExclution,
} from './utilities';

export function getVocativeName(rawText) {
  if (!isNotEmptyString(rawText)) {
    return rawText;
  }
  let res = '';
  rawText = rawText.toLowerCase();
  rawText = rawText.substring(0, 1).toUpperCase() + rawText.substring(1);
  let syllabusCount = 0;
  let tonosPoint = -1;
  if (rawText.length > 2) {
    if (isGreekSigma(rawText.charAt(rawText.length - 1))) {
      if (isRuleEligible(rawText.charAt(rawText.length - 2))) {
        for (let i = 0; i < rawText.length; i++) {
          if (isGreekVowel(rawText.charAt(i))) {
            syllabusCount++;
          }
          if (isGreekVowelWithIntonation(rawText.charAt(i))) {
            tonosPoint = syllabusCount;
          }
        }
      } else {
        //το ας γίνεται α ή το ης γίνεται η
        res = rawText.substring(0, rawText.length - 1);
      }
    } else {
      res = rawText;
    }
  }
  if (tonosPoint > 0) {
    if (
      tonosPoint === syllabusCount ||
      syllabusCount - tonosPoint > 1 ||
      isRuleExclution(rawText.charAt(rawText.length - 3), syllabusCount)
    ) {
      //το ος γίνεται ε
      res = rawText.substring(0, rawText.length - 2) + 'ε';
    } else {
      //το ος γίνεται ο
      res = rawText.substring(0, rawText.length - 2) + 'ο';
    }
  }
  if (isNotEmptyString(res)) {
    return res;
  } else {
    //Not supported for now...
    return rawText;
  }
}
