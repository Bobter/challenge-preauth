import { dontPermute } from './dont_permute';

describe('dontPermute', () => {
    it('Debe encontrar un par que sume N', () => {
        expect(dontPermute([2, 5, 14, 0, 8], 10)).toEqual([2, 8]);
    });

    it('Debe devolver null si no hay un par que sume N', () => {
        expect(dontPermute([1, 2, 3, 4, 5], 12)).toBeNull();
    });

    it('Debe encontrar el mismo número si aparece dos veces y suma N', () => {
        expect(dontPermute([1, 5, 3, 5], 10)).toEqual([5, 5]);
    });

    it('Debe funcionar con números negativos', () => {
        expect(dontPermute([-1, 2, 8, -3], 5)).toEqual([8, -3]);
    });

    it('Debe devolver el primer par que suma N (orden de aparición en el array)', () => {
        expect(dontPermute([1, 2, 4, 7, 6, 8, 3], 10)).toEqual([4, 6]);
    });

    describe('Validaciones', () => {
        it('Debe lanzar un TypeError si M no es un array', () => {
            expect(() => dontPermute("no array" as any, 5)).toThrow("M debe ser un array");
        });

        it('Debe lanzar un TypeError si N no es un número', () => {
            expect(() => dontPermute([1, 2, 3], "no numero" as any)).toThrow("N debe ser un número");
        });

        it('Debe lanzar un Error si M está vacío', () => {
            expect(() => dontPermute([], 5)).toThrow("M no puede estar vacío");
        });
    });
});