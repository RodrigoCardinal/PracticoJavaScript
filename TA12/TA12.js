function generatePassword(length) {
    if (length < 8) {
        throw new Error("La longitud mínima de la contraseña es 8 caracteres.");
    }

    const lowerCase = 'abcdefghijklmnñopqrstuvwxyz';
    const upperCase = 'ABCDEFGHIJKLMNÑOPQRSTUVWXYZ';
    const numbers = '0123456789';
    const symbols = '!@#$%^&*()_-+=<>?/.~';

    const allCharacters = lowerCase + upperCase + numbers + symbols;

    let password = '';

    const randomValues = new Uint32Array(length);
    window.crypto.getRandomValues(randomValues);


    
    for (let i = 0; i < length; i++) {
        const randomIndex = randomValues[i] % allCharacters.length;
        password += allCharacters[randomIndex];
    }

    return password;
}

console.log(generatePassword(8)); 
console.log(generatePassword(8)); 

