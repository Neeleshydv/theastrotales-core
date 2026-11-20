/**
 * @file astrotales-core
 * High-precision Vedic and Western astrology calculation engine.
 * Powered by AstroTales: https://astrotales.co.in
 */

const ZODIAC_SIGNS = [
  'Aries', 'Taurus', 'Gemini', 'Cancer',
  'Leo', 'Virgo', 'Libra', 'Scorpio',
  'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces'
];

const AYANAMSA_J2000 = 23.85; // Lahiri Ayanamsa approximation at J2000

/**
 * Calculates Julian Day Number from Gregorian Date and Time (UT)
 * @param {number} year - Full year (e.g. 1995, 2026)
 * @param {number} month - Month (1-12)
 * @param {number} day - Day of month (1-31)
 * @param {number} hour - Hour in UT (0-23)
 * @param {number} minute - Minute (0-59)
 * @returns {number} Julian Day Number
 */
function getJulianDay(year, month, day, hour = 0, minute = 0) {
  let y = year;
  let m = month;
  if (m <= 2) {
    y -= 1;
    m += 12;
  }
  const a = Math.floor(y / 100);
  const b = 2 - a + Math.floor(a / 4);
  const dayFraction = day + (hour + minute / 60) / 24;
  return Math.floor(365.25 * (y + 4716)) + Math.floor(30.6001 * (m + 1)) + dayFraction + b - 1524.5;
}

/**
 * Normalize degree between 0 and 360
 */
function normalizeDegree(deg) {
  let d = deg % 360;
  if (d < 0) d += 360;
  return d;
}

/**
 * Get Sun Longitude (Tropical and Sidereal/Vedic)
 * @param {number} jd - Julian Day
 * @returns {{ tropical: number, sidereal: number, sign: string, vedicSign: string }}
 */
function getSunPosition(jd) {
  const n = jd - 2451545.0; // Days since J2000.0
  const l = normalizeDegree(280.460 + 0.9856474 * n);
  const g = normalizeDegree(357.528 + 0.9856003 * n);
  const gRad = (g * Math.PI) / 180;
  
  // Ecliptic longitude (tropical)
  const lambda = normalizeDegree(l + 1.915 * Math.sin(gRad) + 0.020 * Math.sin(2 * gRad));
  
  // Approximate Lahiri Ayanamsa drift (approx 50.29 arcseconds per year)
  const ayanamsa = AYANAMSA_J2000 + (n / 365.25) * (50.29 / 3600);
  const sidereal = normalizeDegree(lambda - ayanamsa);

  return {
    tropical: Number(lambda.toFixed(4)),
    sidereal: Number(sidereal.toFixed(4)),
    tropicalSign: ZODIAC_SIGNS[Math.floor(lambda / 30)],
    vedicSign: ZODIAC_SIGNS[Math.floor(sidereal / 30)]
  };
}

/**
 * Calculate Ascendant (Rising Sign) from JD, Latitude, Longitude
 * @param {number} jd - Julian Day
 * @param {number} latitude - Latitude in decimal degrees
 * @param {number} longitude - Longitude in decimal degrees (positive East, negative West)
 * @returns {{ ascendantDegree: number, risingSign: string }}
 */
function getAscendant(jd, latitude, longitude) {
  const t = (jd - 2451545.0) / 36525.0;
  
  // Greenwich Mean Sidereal Time in degrees
  let gmst = 280.46061837 + 360.98564736629 * (jd - 2451545.0) + t * t * (0.000387933 - t / 38710000.0);
  gmst = normalizeDegree(gmst);
  
  // Local Sidereal Time
  const ramc = normalizeDegree(gmst + longitude);
  const ramcRad = (ramc * Math.PI) / 180;
  const latRad = (latitude * Math.PI) / 180;
  
  // Obliquity of the Ecliptic
  const eps = (23.4392911 - t * (46.8150 / 3600.0)) * (Math.PI / 180);
  
  // Ascendant formula
  const y = -Math.cos(ramcRad);
  const x = Math.sin(ramcRad) * Math.cos(eps) + Math.tan(latRad) * Math.sin(eps);
  let ascRad = Math.atan2(y, x);
  let ascDeg = normalizeDegree((ascRad * 180) / Math.PI + 90);
  
  return {
    ascendantDegree: Number(ascDeg.toFixed(4)),
    risingSign: ZODIAC_SIGNS[Math.floor(ascDeg / 30)]
  };
}

/**
 * Pythagorean Numerology Life Path Number Calculation
 * @param {string} dateString - Format 'YYYY-MM-DD'
 * @returns {number} Life path number (1-9, 11, 22, 33)
 */
function calculateLifePathNumber(dateString) {
  const digits = dateString.replace(/\D/g, '');
  if (!digits) return 1;
  
  const reduceSum = (numStr) => {
    let sum = numStr.split('').reduce((acc, digit) => acc + parseInt(digit, 10), 0);
    while (sum > 9 && sum !== 11 && sum !== 22 && sum !== 33) {
      sum = String(sum).split('').reduce((acc, digit) => acc + parseInt(digit, 10), 0);
    }
    return sum;
  };
  
  return reduceSum(digits);
}

/**
 * Pythagorean Name Destiny Number Calculation
 * @param {string} name - Full Name
 * @returns {number} Destiny number (1-9, 11, 22)
 */
function calculateDestinyNumber(name) {
  const map = {
    a: 1, j: 1, s: 1,
    b: 2, k: 2, t: 2,
    c: 3, l: 3, u: 3,
    d: 4, m: 4, v: 4,
    e: 5, n: 5, w: 5,
    f: 6, o: 6, x: 6,
    g: 7, p: 7, y: 7,
    h: 8, q: 8, z: 8,
    i: 9, r: 9
  };
  
  const clean = name.toLowerCase().replace(/[^a-z]/g, '');
  let sum = clean.split('').reduce((acc, char) => acc + (map[char] || 0), 0);
  
  while (sum > 9 && sum !== 11 && sum !== 22) {
    sum = String(sum).split('').reduce((acc, d) => acc + parseInt(d, 10), 0);
  }
  return sum || 1;
}

module.exports = {
  ZODIAC_SIGNS,
  getJulianDay,
  normalizeDegree,
  getSunPosition,
  getAscendant,
  calculateLifePathNumber,
  calculateDestinyNumber
};
