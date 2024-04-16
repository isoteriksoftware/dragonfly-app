/**
 * Truncates file name if it exceeds the maxLength. File extension is preserved.
 * @param file  The file to truncate
 * @param maxLength  The maximum length of the file name
 * @returns  The truncated file name
 */
export const truncateFileName = (file: File, maxLength: number): string => {
  // Split the file name and extension
  const parts: string[] = file.name.split(".");
  const fileName: string = parts.slice(0, -1).join(".");
  const extension: string = parts[parts.length - 1];

  // Check if the file name length exceeds the maxLength
  if (fileName.length > maxLength) {
    // Truncate the file name and add ellipsis
    const truncatedFileName: string =
      fileName.substring(0, maxLength - 3) + "***";
    // Concatenate with the extension
    return truncatedFileName + "." + extension;
  }

  // If the file name is within the maxLength, return it as is
  return file.name;
};
