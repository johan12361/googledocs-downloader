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
}
