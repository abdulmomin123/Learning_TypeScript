function generateError(message: string, code: number) {
  throw { message, code };
}

console.log(generateError('File not found', 404));
