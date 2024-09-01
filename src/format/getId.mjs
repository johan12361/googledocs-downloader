/**
 * Extracts the Google Document ID from a given URL.
 *
 * This function takes a Google Docs URL and extracts the unique document ID
 * using a regular expression. The ID is usually located between "/document/d/"
 * and the next forward slash in the URL. If the ID cannot be extracted,
 * the function throws an error.
 *
 * @param {string} url - The full URL of the Google Document.
 * @returns {string} The extracted Google Document ID.
 * @throws Will throw an error if the document ID cannot be extracted from the URL.
 */
export function getIdDocFromUrl(url) {
  const regex = /\/document\/d\/([a-zA-Z0-9-_]+)/
  const matches = url.match(regex)

  if (matches && matches[1]) {
    return matches[1] // The document ID
  } else {
    throw new Error('Could not extract the document ID from the provided URL.')
  }
}
