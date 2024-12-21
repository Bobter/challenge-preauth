function validations(M: number[], N: number) {
    if (!Array.isArray(M)) {
      throw new TypeError("M debe ser un array");
    }
    if (typeof N !== 'number') {
      throw new TypeError("N debe ser un número");
    }
    if (M.length === 0) {
      throw new Error("M no puede estar vacío");
    }
}

export function dontPermute(M: number[], N: number): [number, number] | null {
    
    validations(M,N)
  
    const seen = new Map<number, number>();

    for (let i = 0; i < M.length; i++) {
        const num = M[i];
        const complement = N - num;

        if (seen.has(complement)) {
            return [complement, num];
        }

        if(!seen.has(num)){
            seen.set(num, i);
        }
    }

    return null; 
}

