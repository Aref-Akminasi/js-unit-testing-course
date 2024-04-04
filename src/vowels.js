export function countVowelsAndConsonants(s) {
  const vowels = 'aeiouAEIOU';
  let vowelsCount = 0;
  let consonantsCount = 0;

  for (let i = 0; i < s?.length; i++) {
    if (vowels.includes(s[i])) {
      vowelsCount++;
    } else if (s[i].toLowerCase() != s[i].toUpperCase()) {
      // This checks if the character is a letter.
      consonantsCount++;
    }
  }

  return {
    vowels: vowelsCount,
    consonants: consonantsCount,
  };
}
