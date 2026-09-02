/**
 * ISO 4217 currency code mapping utility.
 *
 * Provides bidirectional conversion between alphabetic codes (CNY, USD, SGD …)
 * and numeric codes (156, 840, 702 …) used by the backend API.
 */

interface CurrencyEntry {
  alpha: string;
  numeric: string;
}

const CURRENCIES: CurrencyEntry[] = [
  { alpha: "AED", numeric: "784" },
  { alpha: "AFN", numeric: "971" },
  { alpha: "ALL", numeric: "008" },
  { alpha: "AMD", numeric: "051" },
  { alpha: "ANG", numeric: "532" },
  { alpha: "AOA", numeric: "973" },
  { alpha: "ARS", numeric: "032" },
  { alpha: "AUD", numeric: "036" },
  { alpha: "AWG", numeric: "533" },
  { alpha: "AZN", numeric: "944" },
  { alpha: "BAM", numeric: "977" },
  { alpha: "BBD", numeric: "052" },
  { alpha: "BDT", numeric: "050" },
  { alpha: "BGN", numeric: "975" },
  { alpha: "BHD", numeric: "048" },
  { alpha: "BIF", numeric: "108" },
  { alpha: "BMD", numeric: "060" },
  { alpha: "BND", numeric: "096" },
  { alpha: "BOB", numeric: "068" },
  { alpha: "BRL", numeric: "986" },
  { alpha: "BSD", numeric: "044" },
  { alpha: "BTN", numeric: "064" },
  { alpha: "BWP", numeric: "072" },
  { alpha: "BYN", numeric: "933" },
  { alpha: "BZD", numeric: "084" },
  { alpha: "CAD", numeric: "124" },
  { alpha: "CDF", numeric: "976" },
  { alpha: "CHF", numeric: "756" },
  { alpha: "CLP", numeric: "152" },
  { alpha: "CNY", numeric: "156" },
  { alpha: "COP", numeric: "170" },
  { alpha: "CRC", numeric: "188" },
  { alpha: "CUP", numeric: "192" },
  { alpha: "CVE", numeric: "132" },
  { alpha: "CZK", numeric: "203" },
  { alpha: "DJF", numeric: "262" },
  { alpha: "DKK", numeric: "208" },
  { alpha: "DOP", numeric: "214" },
  { alpha: "DZD", numeric: "012" },
  { alpha: "EGP", numeric: "818" },
  { alpha: "ERN", numeric: "232" },
  { alpha: "ETB", numeric: "230" },
/* PLACEHOLDER_CURRENCIES_CONTINUED */
  { alpha: "EUR", numeric: "978" },
  { alpha: "FJD", numeric: "242" },
  { alpha: "FKP", numeric: "238" },
  { alpha: "GBP", numeric: "826" },
  { alpha: "GEL", numeric: "981" },
  { alpha: "GHS", numeric: "936" },
  { alpha: "GIP", numeric: "292" },
  { alpha: "GMD", numeric: "270" },
  { alpha: "GNF", numeric: "324" },
  { alpha: "GTQ", numeric: "320" },
  { alpha: "GYD", numeric: "328" },
  { alpha: "HKD", numeric: "344" },
  { alpha: "HNL", numeric: "340" },
  { alpha: "HRK", numeric: "191" },
  { alpha: "HTG", numeric: "332" },
  { alpha: "HUF", numeric: "348" },
  { alpha: "IDR", numeric: "360" },
  { alpha: "ILS", numeric: "376" },
  { alpha: "INR", numeric: "356" },
  { alpha: "IQD", numeric: "368" },
  { alpha: "IRR", numeric: "364" },
  { alpha: "ISK", numeric: "352" },
  { alpha: "JMD", numeric: "388" },
  { alpha: "JOD", numeric: "400" },
  { alpha: "JPY", numeric: "392" },
  { alpha: "KES", numeric: "404" },
  { alpha: "KGS", numeric: "417" },
  { alpha: "KHR", numeric: "116" },
  { alpha: "KMF", numeric: "174" },
  { alpha: "KPW", numeric: "408" },
  { alpha: "KRW", numeric: "410" },
  { alpha: "KWD", numeric: "414" },
  { alpha: "KYD", numeric: "136" },
  { alpha: "KZT", numeric: "398" },
  { alpha: "LAK", numeric: "418" },
  { alpha: "LBP", numeric: "422" },
  { alpha: "LKR", numeric: "144" },
  { alpha: "LRD", numeric: "430" },
  { alpha: "LSL", numeric: "426" },
  { alpha: "LYD", numeric: "434" },
  { alpha: "MAD", numeric: "504" },
  { alpha: "MDL", numeric: "498" },
  { alpha: "MGA", numeric: "969" },
  { alpha: "MKD", numeric: "807" },
  { alpha: "MMK", numeric: "104" },
  { alpha: "MNT", numeric: "496" },
  { alpha: "MOP", numeric: "446" },
  { alpha: "MRU", numeric: "929" },
  { alpha: "MUR", numeric: "480" },
  { alpha: "MVR", numeric: "462" },
  { alpha: "MWK", numeric: "454" },
/* PLACEHOLDER_CURRENCIES_CONTINUED_2 */
  { alpha: "MXN", numeric: "484" },
  { alpha: "MYR", numeric: "458" },
  { alpha: "MZN", numeric: "943" },
  { alpha: "NAD", numeric: "516" },
  { alpha: "NGN", numeric: "566" },
  { alpha: "NIO", numeric: "558" },
  { alpha: "NOK", numeric: "578" },
  { alpha: "NPR", numeric: "524" },
  { alpha: "NZD", numeric: "554" },
  { alpha: "OMR", numeric: "512" },
  { alpha: "PAB", numeric: "590" },
  { alpha: "PEN", numeric: "604" },
  { alpha: "PGK", numeric: "598" },
  { alpha: "PHP", numeric: "608" },
  { alpha: "PKR", numeric: "586" },
  { alpha: "PLN", numeric: "985" },
  { alpha: "PYG", numeric: "600" },
  { alpha: "QAR", numeric: "634" },
  { alpha: "RON", numeric: "946" },
  { alpha: "RSD", numeric: "941" },
  { alpha: "RUB", numeric: "643" },
  { alpha: "RWF", numeric: "646" },
  { alpha: "SAR", numeric: "682" },
  { alpha: "SBD", numeric: "090" },
  { alpha: "SCR", numeric: "690" },
  { alpha: "SDG", numeric: "938" },
  { alpha: "SEK", numeric: "752" },
  { alpha: "SGD", numeric: "702" },
  { alpha: "SHP", numeric: "654" },
  { alpha: "SLE", numeric: "925" },
  { alpha: "SOS", numeric: "706" },
  { alpha: "SRD", numeric: "968" },
  { alpha: "SSP", numeric: "728" },
  { alpha: "STN", numeric: "930" },
  { alpha: "SYP", numeric: "760" },
  { alpha: "SZL", numeric: "748" },
  { alpha: "THB", numeric: "764" },
  { alpha: "TJS", numeric: "972" },
  { alpha: "TMT", numeric: "934" },
  { alpha: "TND", numeric: "788" },
  { alpha: "TOP", numeric: "776" },
  { alpha: "TRY", numeric: "949" },
  { alpha: "TTD", numeric: "780" },
  { alpha: "TWD", numeric: "901" },
  { alpha: "TZS", numeric: "834" },
  { alpha: "UAH", numeric: "980" },
  { alpha: "UGX", numeric: "800" },
  { alpha: "USD", numeric: "840" },
  { alpha: "UYU", numeric: "858" },
  { alpha: "UZS", numeric: "860" },
  { alpha: "VES", numeric: "928" },
  { alpha: "VND", numeric: "704" },
  { alpha: "VUV", numeric: "548" },
  { alpha: "WST", numeric: "882" },
  { alpha: "XAF", numeric: "950" },
  { alpha: "XCD", numeric: "951" },
  { alpha: "XOF", numeric: "952" },
  { alpha: "XPF", numeric: "953" },
  { alpha: "YER", numeric: "886" },
  { alpha: "ZAR", numeric: "710" },
  { alpha: "ZMW", numeric: "967" },
  { alpha: "ZWL", numeric: "932" },
];

// Build lookup maps at module load time for O(1) access
const alphaToNumeric = new Map<string, string>();
const numericToAlpha = new Map<string, string>();

for (const entry of CURRENCIES) {
  alphaToNumeric.set(entry.alpha, entry.numeric);
  numericToAlpha.set(entry.numeric, entry.alpha);
}

/**
 * Convert alphabetic currency code to ISO 4217 numeric code.
 * Accepts both upper and lower case (e.g. "cny" → "156").
 * Returns undefined if the code is not found.
 */
export function currencyAlphaToNumeric(alpha: string): string | undefined {
  return alphaToNumeric.get(alpha.toUpperCase());
}

/**
 * Convert ISO 4217 numeric code to alphabetic currency code.
 * Returns undefined if the code is not found.
 */
export function currencyNumericToAlpha(numeric: string): string | undefined {
  return numericToAlpha.get(numeric);
}
