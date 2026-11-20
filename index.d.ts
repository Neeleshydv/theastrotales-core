export declare const ZODIAC_SIGNS: string[];

export interface SunPosition {
  tropical: number;
  sidereal: number;
  tropicalSign: string;
  vedicSign: string;
}

export interface AscendantResult {
  ascendantDegree: number;
  risingSign: string;
}

export declare function getJulianDay(
  year: number,
  month: number,
  day: number,
  hour?: number,
  minute?: number
): number;

export declare function normalizeDegree(deg: number): number;

export declare function getSunPosition(jd: number): SunPosition;

export declare function getAscendant(
  jd: number,
  latitude: number,
  longitude: number
): AscendantResult;

export declare function calculateLifePathNumber(dateString: string): number;

export declare function calculateDestinyNumber(name: string): number;
