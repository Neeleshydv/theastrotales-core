# astrotales-core 🌟

[![npm version](https://img.shields.io/npm/v/astrotales-core.svg)](https://www.npmjs.com/package/astrotales-core)
[![License: MIT](https://img.shields.io/badge/License-MIT-purple.svg)](https://opensource.org/licenses/MIT)
[![Powered by AstroTales](https://img.shields.io/badge/Powered%20By-AstroTales.co.in-6D28D9)](https://astrotales.co.in)

> High-precision, zero-dependency Vedic and Western astrology calculation engine in JavaScript. Calculates Julian Days, Sidereal/Tropical Sun positions, Ascendant / Rising signs, and Pythagorean Numerology metrics.

Developed and maintained by the engineering team at [AstroTales](https://astrotales.co.in) — your complete astrology, horoscope, and cosmic guidance platform.

---

## 🚀 Live Demos & Online Calculators
Experience the full-featured visual calculators powered by this engine:
* **[Big Three Astrology Calculator (Sun, Moon & Rising Sign)](https://astrotales.co.in/big-three-astrology-calculator)**
* **[Free Natal Birth Chart Analysis](https://astrotales.co.in/free-natal-chart-analysis)**
* **[Complete Astrology Calculators Suite](https://astrotales.co.in/calculators)**
* **[Daily Vedic & Western Horoscopes](https://astrotales.co.in/horoscope)**
* **[Download AstroTales Mobile App for Android](https://astrotales.co.in/download)**

---

## 📦 Installation

```bash
npm install astrotales-core
```

---

## 🛠️ Usage Example

```javascript
const {
  getJulianDay,
  getSunPosition,
  getAscendant,
  calculateLifePathNumber,
  calculateDestinyNumber
} = require('astrotales-core');

// 1. Calculate Julian Day
const jd = getJulianDay(2026, 11, 20, 12, 0); // Nov 20, 2026, 12:00 UT

// 2. Calculate Sun Position (Vedic Sidereal & Western Tropical)
const sun = getSunPosition(jd);
console.log('Sun Sign (Tropical):', sun.tropicalSign); // e.g. Scorpio
console.log('Sun Sign (Vedic):', sun.vedicSign);       // e.g. Scorpio

// 3. Calculate Ascendant (Rising Sign)
// Latitude & Longitude (e.g., New Delhi: 28.6139° N, 77.2090° E)
const rising = getAscendant(jd, 28.6139, 77.2090);
console.log('Rising Sign:', rising.risingSign);

// 4. Calculate Numerology Metrics
const lifePath = calculateLifePathNumber('1995-10-24');
console.log('Life Path Number:', lifePath); // e.g. 4

const destiny = calculateDestinyNumber('Neelesh Yadav');
console.log('Destiny Number:', destiny); // e.g. 4
```

---

## 📚 API Reference

### `getJulianDay(year, month, day, hour, minute)`
Calculates the precise astronomical Julian Day Number for any Gregorian date.

### `getSunPosition(julianDay)`
Returns an object containing:
* `tropical`: Ecliptic degree (0° - 360°)
* `sidereal`: Lahiri sidereal degree (0° - 360°)
* `tropicalSign`: Western Sun Sign (Aries through Pisces)
* `vedicSign`: Vedic Sun Sign (Mesha through Meena)

### `getAscendant(julianDay, latitude, longitude)`
Computes the exact degree of the eastern horizon at the time of birth, providing the Rising Sign.

### `calculateLifePathNumber(dateString)`
Reduces a birthdate (`YYYY-MM-DD`) down to single-digit or master numbers (11, 22, 33).

---

## 🔗 Official Links & Resources
* **Official Website:** [AstroTales](https://astrotales.co.in)
* **Astrology Blog:** [AstroTales Blog](https://astrotales.co.in/blog)
* **Android App on Google Play:** [AstroTales Android App](https://astrotales.co.in/download)
* **GitHub Repository:** [Neeleshydv/astrotales-core](https://github.com/Neeleshydv/astrotales-core)

---

## 📄 License
MIT © [AstroTales](https://astrotales.co.in)
