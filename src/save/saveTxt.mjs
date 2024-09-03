import fs from 'fs/promises'
import { getTxtDoc } from '../getTxt/getTxt.mjs'
import path from 'path' // Importa el módulo path para manejar rutas de archivos

/**
 * Saves the content of a Google Docs document as a text file (.txt) on the local filesystem.
 *
 * @async
 * @function savetxt
 * @param {string} documentId - The ID of the Google Docs document to be downloaded.
 * @param {string} dirPath - The path to the directory where the file will be saved.
 * @param {string} filename - The name of the file without the .txt extension.
 * @param {string} [encoding='utf8'] - The character encoding to use when saving the file. Defaults to 'utf8'.
 * @returns {Promise<string|null>} - Returns the file path if the document is saved successfully, or null if an error occurs.
 *
 * @throws Will log an error to the console if the `documentId`, `dirPath`, or `filename` is invalid.
 *         Will also log an error if there is an issue saving the file.
 */
export async function savetxt(documentId, dirPath, filename, encoding = 'utf8') {
  // Validación de los parámetros de entrada
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

  const data = await getTxtDoc(documentId)
  const filePath = path.join(dirPath, `${filename}.txt`) // Usa path.join para construir la ruta del archivo

  if (data) {
    try {
      await fs.writeFile(filePath, data, encoding)
      console.log(`Document saved successfully at ${filePath}`)
      return filePath
    } catch (error) {
      console.error('Error saving the document:', error.message)
      return null // Devuelve null en caso de error
    }
  } else {
    console.error('No data to save.')
    return null // Devuelve null si no hay datos para guardar
  }
}
