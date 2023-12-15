import { FormatDatePipe } from "./format-date.pipe";

describe('FormatDatePipe', () => {
    // Se declara la variable de tipo 'FormatDatePipe'
    let pipe: FormatDatePipe;

    // Antes de cada test declaramos la instancia
    beforeEach(() => {
        pipe = new FormatDatePipe();
    });

    // TEST 1: que se cree correctamente el pipe
    it('should create', () => {
        expect(pipe).toBeTruthy();
    });

    // TEST 2: que se obtenga el resultado esperado
    /* it('duplicate pipe success', () => {
        let number: number = 4;
        const result = pipe.transform(number);
        expect(result).toBe(8);
    }); */
});