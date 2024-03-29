const toSnakeCase = (string) => {
  return string
    .replace(/([a-z])([A-Z])/g, "$1_$2") // separar palabras con mayúsculas con _
    .replace(/(\s|\W)+/g, "_") // reemplazar espacios y caracteres no alfanuméricos con _
    .toLowerCase(); // convertir todo a minúsculas
};

export default toSnakeCase;