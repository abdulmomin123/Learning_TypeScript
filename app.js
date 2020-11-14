function generateError(message, code) {
    throw { message: message, code: code };
}
console.log(generateError('File not found', 404));
