function generatePassword(length) {
  if (length < 8) {
    throw new Error("La contraseña debe tener al menos 8 caracteres");
  }

  const min = "abcdefghijklmnñopqrstuvwxyz";
  const may = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ";
  const num = "0123456789";
  const symbolos = "!@#$%^&*()_+<>?";

  const all = min + may + num + symbolos;

  let pasword = "";

  for (let i = 0; i < length; i++) {
    const randomChar = all.charAt(Math.floor(Math.random() * all.length));
    pasword += randomChar;
  }

  return pasword;
}

console.log(generatePassword(8));
console.log(generatePassword(8));