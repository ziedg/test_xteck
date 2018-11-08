export const f1 = (a, b) => {
    let result = []
    let nb = 0;
    for (let str1 in a) {
        for (let str2 in b) {
            if (a[str1] === b[str2]) {
                nb++
            }
        }
        result.push(nb);
        nb = 0;

    }
    return result;


}