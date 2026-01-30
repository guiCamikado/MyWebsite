class ArrayManipulators {

    // Retorna array ate o ultimo índice nao zero
    static trimTrailingZeros(arr) {
        let lastIndex = -1;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] !== 0) {
                lastIndex = i;
            }
        }

        if (lastIndex === -1) return [];
        return arr.slice(0, lastIndex + 1);
    }
}

export default ArrayManipulators;