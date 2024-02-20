/**
 * Esta función nos permite tomar una carta del deck
 * @param {Array<String>} deck un array con las cartas que hay en el deck
 * @returns {String} retorna un String con la carta seleccionada
 */
export const pedirCarta = (deck) => {
    if (!deck == deck.length === 0 ) {
        throw 'No hay cartas en el deck';
    }
    const carta = deck.pop();
    return carta;
}