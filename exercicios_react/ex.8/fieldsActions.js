export function changeValue(e) {
    return {
        type: 'VALUE_CHANGED', // retorna o tipo, pode ser qualquer nome
        payload: e.target.value // retorna o valor atual do evento
    }
}