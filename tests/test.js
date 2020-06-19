import getVocativeName from '../src/index';

describe('get vocative name', () => {
  test('returns Μάκη when given Μάκης', () => {
    expect(getVocativeName('Μάκης')).toBe('Μάκη');
  });

  test('returns Κώστα when given Κώστας', () => {
    expect(getVocativeName('Κώστας')).toBe('Κώστα');
  });

  test('returns Γιάννη when given Γιάννης', () => {
    expect(getVocativeName('Γιάννης')).toBe('Γιάννη');
  });

  test('returns Πέτρο when given Πέτρος', () => {
    expect(getVocativeName('Πέτρος')).toBe('Πέτρο');
  });

  test('returns Στυλιανέ when given Στυλιανός', () => {
    expect(getVocativeName('Στυλιανός')).toBe('Στυλιανέ');
  });

  test('returns Στέλιο when given Στέλιος', () => {
    expect(getVocativeName('Στέλιος')).toBe('Στέλιο');
  });

  test('returns Ιωσήφ when given Ιωσήφ', () => {
    expect(getVocativeName('Ιωσήφ')).toBe('Ιωσήφ');
  });

  test('returns Κωσταντίνε when given Κωσταντίνος', () => {
    expect(getVocativeName('Κωσταντίνος')).toBe('Κωσταντίνε');
  });

  test('returns Αναστάση when given Αναστάσης', () => {
    expect(getVocativeName('Αναστάσης')).toBe('Αναστάση');
  });

  test('returns Αυγουστίνε when given Αυγουστίνος', () => {
    expect(getVocativeName('Αυγουστίνος')).toBe('Αυγουστίνε');
  });

  test('returns Πλάτων when given Πλάτων', () => {
    expect(getVocativeName('Πλάτων')).toBe('Πλάτων');
  });

  test('returns Πλάτωνα when given Πλάτωνας', () => {
    expect(getVocativeName('Πλάτωνας')).toBe('Πλάτωνα');
  });

  test('returns Παύλο when given Παύλος', () => {
    expect(getVocativeName('Παύλος')).toBe('Παύλο');
  });

  test('returns Κωσταντίνα when given Κωσταντίνα', () => {
    expect(getVocativeName('Κωσταντίνα')).toBe('Κωσταντίνα');
  });

  test('returns Μαριλένα when given Μαριλένα', () => {
    expect(getVocativeName('Μαριλένα')).toBe('Μαριλένα');
  });

  test('returns Δημήτριε when given Δημήτριος', () => {
    expect(getVocativeName('Δημήτριος')).toBe('Δημήτριε');
  });

  test('returns Δημητρό when given Δημητρό', () => {
    expect(getVocativeName('Δημητρό')).toBe('Δημητρό');
  });

  test('returns Παπαδόπουλε when given Παπαδόπουλος', () => {
    expect(getVocativeName('Παπαδόπουλος')).toBe('Παπαδόπουλε');
  });

  test('returns Άννα when given Άννα', () => {
    expect(getVocativeName('Άννα')).toBe('Άννα');
  });

  test('returns Λαμπρινή when given Λαμπρινή', () => {
    expect(getVocativeName('Λαμπρινή')).toBe('Λαμπρινή');
  });

  test('returns Χρήστο when given Χρήστος', () => {
    expect(getVocativeName('Χρήστο')).toBe('Χρήστο');
  });

  test('returns Ιορδάνη when given Ιορδάνης', () => {
    expect(getVocativeName('Ιορδάνης')).toBe('Ιορδάνη');
  });

  test('returns Ανδρίτσο when given Ανδρίτσος', () => {
    expect(getVocativeName('Ανδρίτσος')).toBe('Ανδρίτσο');
  });

  test('returns Mark when given Mark', () => {
    expect(getVocativeName('Mark')).toBe('Mark');
  });

  test('returns Harry when given Harry', () => {
    expect(getVocativeName('Harry')).toBe('Harry');
  });

  test('returns input when given a character', () => {
    expect(getVocativeName('Μ')).toBe('Μ');
  });

  test('returns input when given a number', () => {
    expect(getVocativeName(4)).toBe(4);
  });

  test('returns input when given undefined', () => {
    expect(getVocativeName(undefined)).toBe(undefined);
  });

  test(`returns '' when given an empty string`, () => {
    expect(getVocativeName('')).toBe('');
  });
});
