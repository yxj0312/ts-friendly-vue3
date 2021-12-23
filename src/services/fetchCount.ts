interface FetchCountCallback {
  (count: number): void
}

// it's accepting a callback function as a parameter, and call it here with the hard coded number
export default function fetchCount(cb: FetchCountCallback) {
  cb(0)
}