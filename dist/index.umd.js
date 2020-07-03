(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined'
    ? factory(exports)
    : typeof define === 'function' && define.amd
    ? define(['exports'], factory)
    : ((global = global || self), factory((global.greekVocativeName = {})));
})(this, function (exports) {
  function isGreekVowel(char) {
    const vowels = 'αεηιυοωάέήίύόώ';
    return includesChar(char, vowels);
  }
  function isGreekVowelWithIntonation(char) {
    const vowels = 'άέήίύόώ';
    return includesChar(char, vowels);
  }
  function isRuleExclution(char, syllabusCount) {
    const set = 'νρ';
    return syllabusCount > 2 && includesChar(char, set);
  } // indexOf is faster than regex, for loop and if:
  // https://jsperf.com/regex-vs-for-loop/2

  function includesChar(char, set) {
    if (typeof char !== 'string') return false;
    if (typeof set !== 'string') return false;
    if (char.length !== 1) return false;
    if (set.length < 1) return false;
    return set.indexOf(char) >= 0 ? true : false;
  }
  function isNotEmptyString(text) {
    return typeof text === 'string' && text.length > 0;
  }

  function getVocativeName(text) {
    if (!isNotEmptyString(text)) {
      return text;
    }

    let syllabusCount = 0;
    let tonosPoint = -1; // capitalise first letter

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
        } //το ος γίνεται ο

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

  exports.getVocativeName = getVocativeName;
});
