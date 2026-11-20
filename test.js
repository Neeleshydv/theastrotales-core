const {
  getJulianDay,
  getSunPosition,
  getAscendant,
  calculateLifePathNumber,
  calculateDestinyNumber
} = require('./index');

console.log('Testing astrotales-core engine...');

// Test 1: Julian Day
const jd = getJulianDay(2026, 11, 20, 12, 0);
console.log('Julian Day (2026-11-20 12:00 UT):', jd);
if (isNaN(jd) || jd < 2400000) throw new Error('JD test failed');

// Test 2: Sun Position
const sun = getSunPosition(jd);
console.log('Sun Position:', sun);
if (!sun.tropicalSign || !sun.vedicSign) throw new Error('Sun position test failed');

// Test 3: Ascendant
const asc = getAscendant(jd, 28.6139, 77.2090); // New Delhi
console.log('Ascendant (Delhi):', asc);
if (!asc.risingSign) throw new Error('Ascendant test failed');

// Test 4: Life Path
const lp = calculateLifePathNumber('1995-10-24');
console.log('Life Path Number (1995-10-24):', lp);
if (typeof lp !== 'number') throw new Error('Life Path test failed');

// Test 5: Destiny Number
const dest = calculateDestinyNumber('Neelesh Yadav');
console.log('Destiny Number (Neelesh Yadav):', dest);

console.log('✅ ALL TESTS PASSED! Ready for publishing.');
