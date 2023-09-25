export const isQueryValid = (query: string): boolean => {
    if (query.length < 3) {
        return false;
    }

    const forbiddenWords = ['sexo', 'otraPalabra'];

    if (forbiddenWords.some(word => query.includes(word))) {
        return false
    }

    return true

}