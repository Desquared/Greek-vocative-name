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
  function isGreekSigma(char) {
    const set = 'σς';
    return includesChar(char, set);
  }
  function isRuleEligible(char) {
    const set = 'οό';
    return includesChar(char, set);
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

  function getVocativeName(rawText) {
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

  exports.getVocativeName = getVocativeName;
});
