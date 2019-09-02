'use strict';

const items = [
    'Ada',
    1815, [
        'Informática',
        'Matemática',
        'Escritora'
    ],
    {
        mother: 'Anna Isabella',
        father: 'Lord Byron'
    }
]

for (let item = 0; item < items.length; item++) {
    console.log(`El dato ${items[item]} está en la posición ${item} y es de tipo ${typeof(items[item])}`);
}