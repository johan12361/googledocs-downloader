import fs from 'fs/promises'
import path from 'path'

/**
 * Downloads a Google Docs document in a specified format and saves it to the local filesystem.
 *
 * @async
 * @function downloadGoogleDoc
 * @param {string} documentId - The ID of the Google Docs document to be downloaded.
 * @param {string} dirPath - The path to the directory where the file will be saved.
 * @param {string} filename - The name of the file without the extension.
 * @param {string} format - The format to download the document in. Supported formats are 'pdf', 'docx', 'odt', 'rtf', 'txt', and 'html'.
 * @returns {Promise<string|null>} - Returns the file path if the document is saved successfully, or null if an error occurs.
 *
 * @throws Will log an error to the console if the `documentId`, `dirPath`, `filename`, or `format` is invalid.
 *         Will also log an error if there is an issue saving the file.
 */
export async function savefile(documentId, dirPath, filename, format) {
  if (!documentId || typeof documentId !== 'string') {
    console.error('Invalid documentId provided')
    return null
  }

  if (!dirPath || typeof dirPath !== 'string') {
    console.error('Invalid directory path provided')
    return null
  }

  if (!filename || typeof filename !== 'string') {
    console.error('Invalid filename provided')
    return null
  }

  if (!['pdf', 'docx', 'odt', 'rtf', 'txt', 'html'].includes(format)) {
    console.error('Invalid format provided')
    return null
  }

  const filePath = path.join(dirPath, `${filename}.${format}`)

  // Map formats to Google Docs export URLs
  const formatMap = {
    pdf: 'application/pdf',
    docx: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    odt: 'application/vnd.oasis.opendocument.text',
    rtf: 'application/rtf',
    txt: 'text/plain',
    html: 'text/html'
  }

  const url = `https://docs.google.com/document/d/${documentId}/export?format=${format}`

  try {
    // Asegúrate de que el directorio exista
    await fs.mkdir(dirPath, { recursive: true })

    // Realiza la solicitud fetch para obtener el archivo en el formato especificado
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        Accept: formatMap[format]
      }
    })

    if (!response.ok) {
      throw new Error(`Failed to fetch document: ${response.statusText}`)
    }

    // Lee el contenido del archivo como un buffer
    const arrayBuffer = await response.arrayBuffer()
    const buffer = Buffer.from(arrayBuffer)

    // Guarda el buffer en un archivo
    await fs.writeFile(filePath, buffer)
    console.log(`Document saved successfully at ${filePath}`)
    return filePath
  } catch (error) {
    console.error('Error saving the document:', error.message)
    return null // Devuelve null en caso de error
  }
}
