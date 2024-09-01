/**
 * Fetches the content of a Google Doc in plain text format.
 *
 * This asynchronous function retrieves the text content of a Google Document
 * specified by its `documentId`. It sends a request to the Google Docs export
 * endpoint to download the document in plain text format. If the download is
 * successful, it returns the text content. If there is an error during the
 * fetch operation, it logs the error and returns `null`.
 *
 * @param {string} documentId - The unique identifier of the Google Document to download.
 * @returns {Promise<string|null>} A promise that resolves to the text content of the document,
 * or `null` if an error occurs.
 */
export async function getTxtDoc(documentId) {
  // Validate the documentId input
  if (!documentId || typeof documentId !== 'string') {
    console.error('Invalid documentId provided')
    return null
  }
  const url = `https://docs.google.com/document/d/${encodeURIComponent(documentId)}/export?format=txt`

  try {
    const response = await fetch(url)

    // Check for HTTP errors
    if (!response.ok) {
      throw new Error(`Error downloading the document: ${response.status} ${response.statusText}`)
    }

    const data = await response.text()
    return data // Return the downloaded text
  } catch (error) {
    console.error('Error downloading the document:', error.message)
    return null // Return null in case of an error
  }
}
