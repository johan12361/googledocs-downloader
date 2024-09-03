# GoogleDocs Downloader

`googledocs-downloader` es una biblioteca para descargar documentos de Google Docs en varios formatos y guardar su contenido localmente. La biblioteca proporciona funciones para obtener el contenido de un documento en texto plano, extraer el ID de un documento desde una URL de Google Docs, y descargar y guardar el documento en diferentes formatos.

## Instalación

Para instalar la biblioteca, puedes utilizar npm o yarn:

```bash
npm install googledocs-downloader
```
````

o

```bash
yarn add googledocs-downloader
```

## Uso

### 1. Obtener el contenido de un documento de Google Docs en formato de texto plano

```javascript
import { getTxtDoc } from 'googledocs-downloader'

;(async () => {
  const documentId = 'tu_document_id_aqui'
  const content = await getTxtDoc(documentId)

  if (content) {
    console.log('Contenido del documento:', content)
  } else {
    console.error('Error al obtener el contenido del documento.')
  }
})()
```

#### Descripción

`getTxtDoc(documentId: string): Promise<string | null>`

- **documentId**: El identificador único del documento de Google Docs que deseas descargar.
- **Retorno**: Una promesa que resuelve con el contenido en texto del documento, o `null` si ocurre un error.

### 2. Extraer el ID del documento de una URL de Google Docs

```javascript
import { getIdDocFromUrl } from 'googledocs-downloader'

const url = 'https://docs.google.com/document/d/1a2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p7'
const documentId = getIdDocFromUrl(url)

console.log('ID del documento:', documentId)
```

#### Descripción

`getIdDocFromUrl(url: string): string`

- **url**: La URL completa del documento de Google Docs.
- **Retorno**: El ID del documento extraído de la URL.
- **Excepciones**: Lanza un error si no se puede extraer el ID del documento desde la URL.

### 3. Descargar un documento de Google Docs en un formato especificado y guardarlo localmente

```javascript
import { savefile } from 'googledocs-downloader'

;(async () => {
  const documentId = 'tu_document_id_aqui'
  const dirPath = './downloads'
  const filename = 'mi_documento'
  const format = 'pdf' // Formatos soportados: 'pdf', 'docx', 'odt', 'rtf', 'txt', 'html'

  const filePath = await savefile(documentId, dirPath, filename, format)

  if (filePath) {
    console.log(`Documento guardado exitosamente en ${filePath}`)
  } else {
    console.error('Error al guardar el documento.')
  }
})()
```

#### Descripción

`savefile(documentId: string, dirPath: string, filename: string, format: 'pdf' | 'docx' | 'odt' | 'rtf' | 'txt' | 'html'): Promise<string | null>`

- **documentId**: El ID del documento de Google Docs que deseas descargar.
- **dirPath**: La ruta al directorio donde se guardará el archivo.
- **filename**: El nombre del archivo sin la extensión.
- **format**: El formato en el que deseas descargar el documento. Formatos soportados son 'pdf', 'docx', 'odt', 'rtf', 'txt', y 'html'.
- **Retorno**: Una promesa que resuelve con la ruta del archivo si se guarda correctamente, o `null` si ocurre un error.
- **Excepciones**: Registrará un error en la consola si el `documentId`, `dirPath`, `filename` o `format` son inválidos, o si hay un problema al guardar el archivo.

## Contribuir

Si deseas contribuir a este proyecto, por favor realiza un fork del repositorio y envía un pull request con tus mejoras.

## Licencia

MIT License. Puedes ver el archivo de [Licencia](LICENSE.md) para más detalles.

