export const ExtractFilename = (path) => {
    if (!path) return;
  
    const parts = path.split('/');
    const filenameWithExtension = parts[parts.length - 1];
    const fullPath = filenameWithExtension.split(".")
  
    return `${fullPath[0]}.${fullPath[2]}`;
  };