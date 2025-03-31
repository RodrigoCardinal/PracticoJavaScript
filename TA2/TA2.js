function reverseString(texto) {
    const reversed = texto.split('').reverse().join('');
    console.log(reversed);
}

reverseString("Hola Mundo");