# theastrotales-core 🌟

[![npm version](https://img.shields.io/npm/v/theastrotales-core.svg)](https://www.npmjs.com/package/theastrotales-core)
[![License: MIT](https://img.shields.io/badge/License-MIT-purple.svg)](https://opensource.org/licenses/MIT)
[![Powered by TheAstroTales](https://img.shields.io/badge/Powered%20By-TheAstroTales.com-6D28D9)](https://theastrotales.com)

> High-precision, zero-dependency Vedic and Western astrology calculation engine in JavaScript. Calculates Julian Days, Sidereal/Tropical Sun positions, Ascendant / Rising signs, and Pythagorean Numerology metrics.

Developed and maintained by the engineering team at [TheAstroTales](https://theastrotales.com) — your complete astrology, horoscope, and cosmic guidance platform.

---

## 🚀 Live Demos & Online Calculators
Experience the full-featured visual calculators powered by this engine:
* **[Big Three Astrology Calculator (Sun, Moon & Rising Sign)](https://theastrotales.com/calculator/big-three-calculator)**
* **[Rising Sign (Ascendant) Calculator](https://theastrotales.com/calculator/rising-sign-calculator)**
* **[Numerology Life Path Calculator](https://theastrotales.com/calculator/numerology-life-path-calculator)**
* **[Synastry Chart & Love Compatibility](https://theastrotales.com/compatibility)**
* **[Complete Astrology Calculators Suite](https://theastrotales.com/calculator)**
* **[Daily Vedic & Western Horoscopes](https://theastrotales.com/horoscope)**
* **[TheAstroTales Astrology Blog & In-Depth Guides](https://theastrotales.com/blog)**

---

## 🔒 Security & Offline Guarantee
`theastrotales-core` is a **100% self-contained, offline astronomical mathematics library**. It performs zero network requests, connects to zero external APIs, and contains zero server credentials or tokens. All computations run purely in-memory on the client browser or Node.js environment.

---

## 📦 Installation

```bash
npm install theastrotales-core
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
} = require('theastrotales-core');

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

### `calculateDestinyNumber(name)`
Reduces a full name string to its Pythagorean destiny resonance number.

---

## 🔗 Official Links & Resources
* Official Website: [TheAstroTales](https://theastrotales.com)
* Astrology Guides & Blog: [TheAstroTales Blog](https://theastrotales.com/blog)
* Calculators Directory: [TheAstroTales Calculators](https://theastrotales.com/calculator)
* GitHub Repository: [Neeleshydv/theastrotales-core](https://github.com/Neeleshydv/theastrotales-core)

---

## 📄 License
MIT © [TheAstroTales](https://theastrotales.com)
