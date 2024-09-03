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
   * Saves the content of a Google Docs document as a text file (.txt) on the local filesystem.
   *
   * @param documentId - The ID of the Google Docs document to be downloaded.
   * @param dirPath - The path to the directory where the file will be saved.
   * @param filename - The name of the file without the .txt extension.
   * @param encoding - The character encoding to use when saving the file. Defaults to 'utf8'.
   * @returns A promise that resolves to the file path if the document is saved successfully, or null if an error occurs.
   */
  export declare function savetxt(
    documentId: string,
    dirPath: string,
    filename: string,
    encoding?: string
  ): Promise<string | null>
}
