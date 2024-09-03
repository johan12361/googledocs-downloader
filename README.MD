# GoogleDocs Downloader

`googledocs-downloader` is a library for downloading Google Docs documents in various formats and saving their content locally. The library provides functions to retrieve the content of a document in plain text, extract the document ID from a Google Docs URL, and download and save the document in different formats.

## Installation

To install the library, you can use npm or yarn:

```bash
npm install googledocs-downloader
```

or

```bash
yarn add googledocs-downloader
```

## Usage

### 1. Fetch the content of a Google Docs document in plain text format

```javascript
import { getTxtDoc } from 'googledocs-downloader';

(async () => {
  const documentId = 'your_document_id_here';
  const content = await getTxtDoc(documentId);

  if (content) {
    console.log('Document content:', content);
  } else {
    console.error('Failed to fetch document content.');
  }
})();
```

#### Description

`getTxtDoc(documentId: string): Promise<string | null>`

- **documentId**: The unique identifier of the Google Docs document you want to download.
- **Returns**: A promise that resolves to the text content of the document, or `null` if an error occurs.

### 2. Extract the document ID from a Google Docs URL

```javascript
import { getIdDocFromUrl } from 'googledocs-downloader';

const url = 'https://docs.google.com/document/d/1a2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p7';
const documentId = getIdDocFromUrl(url);

console.log('Document ID:', documentId);
```

#### Description

`getIdDocFromUrl(url: string): string`

- **url**: The full URL of the Google Docs document.
- **Returns**: The extracted document ID from the URL.
- **Throws**: Will throw an error if the document ID cannot be extracted from the URL.

### 3. Download a Google Docs document in a specified format and save it locally

```javascript
import { savefile } from 'googledocs-downloader';

(async () => {
  const documentId = 'your_document_id_here';
  const dirPath = './downloads';
  const filename = 'my_document';
  const format = 'pdf'; // Supported formats: 'pdf', 'docx', 'odt', 'rtf', 'txt', 'html'

  const filePath = await savefile(documentId, dirPath, filename, format);

  if (filePath) {
    console.log(`Document successfully saved at ${filePath}`);
  } else {
    console.error('Failed to save the document.');
  }
})();
```

#### Description

`savefile(documentId: string, dirPath: string, filename: string, format: 'pdf' | 'docx' | 'odt' | 'rtf' | 'txt' | 'html'): Promise<string | null>`

- **documentId**: The ID of the Google Docs document you want to download.
- **dirPath**: The path to the directory where the file will be saved.
- **filename**: The name of the file without the extension.
- **format**: The format in which you want to download the document. Supported formats are 'pdf', 'docx', 'odt', 'rtf', 'txt', and 'html'.
- **Returns**: A promise that resolves to the file path if the document is saved successfully, or `null` if an error occurs.
- **Throws**: Will log an error to the console if the `documentId`, `dirPath`, `filename`, or `format` are invalid, or if there is an issue saving the file.

## Contributing

If you wish to contribute to this project, please fork the repository and submit a pull request with your improvements.

## License

MIT License. See the [LICENSE](LICENSE) file for more details.