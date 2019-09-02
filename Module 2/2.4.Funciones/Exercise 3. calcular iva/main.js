'use script';

debugger
const price = 10;

function getIvaAmount(price) {
    const Iva = price * 0.21;
    const priceWithIva = price + Iva;
    return 'Precio sin IVA:' + price + ', IVA:' + Iva + ' y Total: ' + priceWithIva;
}
console.log(iva(price));