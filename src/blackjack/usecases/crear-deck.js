import { shuffle } from "underscore";


/**
 * Esta función crea un nuevo deck
 * @param {Array<String>} tiposDeCarta Ejemplo: ['C','D','H','S']
 * @param {Array<String>} tiposEspeciales Ejemplo: ['A','J','Q','K'];
 * @returns {Array<String>} esta función retorna un deck mezclado
 */
export const crearDeck = (tiposDeCarta, tiposEspeciales) => {

    if(!tiposDeCarta || tiposDeCarta.length == 0) throw new Error('Tipos de Cartas es obligatorio'); 

    let deck = [];

    for( let i = 2; i <= 10; i++ ) {
        for( let tipo of tiposDeCarta ) {
            deck.push( i + tipo);
        }
    }

    for( let tipo of tiposDeCarta ) {
        for( let esp of tiposEspeciales ) {
            deck.push( esp + tipo);
        }
    }
    
    deck = shuffle( deck );
    
    return deck;
}