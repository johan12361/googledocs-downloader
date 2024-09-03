// index.d.ts
declare module 'googledocs-downloader' {
  /**
   * Fetches the content of a Google Doc in plain text format.
   *
   * This asynchronous function retrieves the text content of a Google Document
   * specified by its `documentId`. It sends a request to the Google Docs export
   * endpoint to download the document in plain text format. If the download is
   * successful, it returns the text content. If there is an error during the
   * fetch operation, it logs the error and returns `null`.
   *
   * @param documentId - The unique identifier of the Google Document to download.
   * @returns A promise that resolves to the text content of the document,
   * or `null` if an error occurs.
   */
  export declare function getTxtDoc(documentId: string): Promise<string | null>

  /**
   * Extracts the Google Document ID from a given URL.
   *
   * This function takes a Google Docs URL and extracts the unique document ID
   * using a regular expression. The ID is usually located between "/document/d/"
   * and the next forward slash in the URL. If the ID cannot be extracted,
   * the function throws an error.
   *
   * @param url - The full URL of the Google Document.
   * @returns The extracted Google Document ID.
   * @throws Will throw an error if the document ID cannot be extracted from the URL.
   */
  export declare function getIdDocFromUrl(url: string): string

  /**
   * Downloads a Google Docs document in a specified format and saves it to the local filesystem.
   *
   * @async
   * @function savefile
   * @param {string} documentId - The ID of the Google Docs document to be downloaded.
   * @param {string} dirPath - The path to the directory where the file will be saved.
   * @param {string} filename - The name of the file without the extension.
   * @param {'pdf' | 'docx' | 'odt' | 'rtf' | 'txt' | 'html'} format - The format to download the document in. Supported formats are 'pdf', 'docx', 'odt', 'rtf', 'txt', and 'html'.
   * @returns {Promise<string | null>} - Returns the file path if the document is saved successfully, or null if an error occurs.
   *
   * @throws Will log an error to the console if the `documentId`, `dirPath`, `filename`, or `format` is invalid.
   *         Will also log an error if there is an issue saving the file.
   */
  export declare function savefile(
    documentId: string,
    dirPath: string,
    filename: string,
    format: 'pdf' | 'docx' | 'odt' | 'rtf' | 'txt' | 'html'
  ): Promise<string | null>
}
