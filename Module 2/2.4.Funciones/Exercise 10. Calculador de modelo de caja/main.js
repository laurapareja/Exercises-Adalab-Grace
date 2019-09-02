'use scrict';

// El ancho del contenido es: 30px y el ancho total de la caja es: 34px



// La función tendrá 4 parámetros:
// el primero será un booleano para especificar si es border-box o no.
// el segundo será un número con el width de la caja.
// el tercero será un número con el padding.
// el cuarto será un número con el border-size.

// Para probar que funciona, ejecuta la función recogiendo el resultado en una variable e imprímela en la consola.



function boxCalculator(isBorderBox, width, padding, borderSize) {
    let result;
    if (isBorderBox === true) {
        const borderBox = width - borderSize - padding;

        result = `El ancho del contenido es: ${borderBox}px y el ancho total de la caja es: ${width}`;
        return result;
    } else {
        const contentBox = width + borderSize + padding;

        result = `El ancho del contenido es: ${width}px y el ancho total de la caja es: ${contentBox}`;
        return result;
    }
}

const widthResult = boxCalculator(true, 60, 4, 2);
console.log(widthResult);