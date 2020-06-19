export function isGreekVowel(char) {
  const vowels = 'αεηιυοωάέήίύόώ';
  return includesChar(char, vowels);
}

export function isGreekVowelWithIntonation(char) {
  const vowels = 'άέήίύόώ';
  return includesChar(char, vowels);
}

export function isGreekSigma(char) {
  const set = 'σς';
  return includesChar(char, set);
}

export function isRuleEligible(char) {
  const set = 'οό';
  return includesChar(char, set);
}

export function isRuleExclution(char, syllabusCount) {
  const set = 'νρ';
  return syllabusCount > 2 && includesChar(char, set);
}

// indexOf is faster than regex, for loop and if:
// https://jsperf.com/regex-vs-for-loop/2
export function includesChar(char, set) {
  if (typeof char !== 'string') return false;
  if (typeof set !== 'string') return false;
  if (char.length !== 1) return false;
  if (set.length < 1) return false;
  return set.indexOf(char) >= 0 ? true : false;
}

export function isNotEmptyString(text) {
  return typeof text === 'string' && text.length > 0;
}
