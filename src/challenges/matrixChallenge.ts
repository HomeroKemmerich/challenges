function randomStringGenerator(length: number){
    const characters = 'abcdefghijklmnopqrstuvwxyz';
    let result = '';
    for(let i = 0; i < length; i++){
        const randomIndex = Math.floor(Math.random() * characters.length);
        result += characters[randomIndex]
    }
    return result;

}

/**
 * generate an array of random strings with the same length. The array should be the same length as the strings
 */
export function randomStringArrayGenerator(){
    const length = Math.floor(Math.random() * 10) + 1;
    const result = [];
    for(let i = 0; i < length; i++){
        const str = randomStringGenerator(length);
        result.push(str)
    }
    return result;
}

function isVowel(char: string){
    return ['a', 'e', 'i', 'o', 'u'].includes(char.toLowerCase())
}

export function matrixChallenge(strArr: Array<String>){

    let result;

    let vowels = new Array(strArr.length).fill([])

    strArr.forEach((str, index) => {
        vowels[index] = str.split('').map(char => isVowel(char) ? 1 : 0)
    })

    vowels.forEach((row, index) => {
        row.forEach((col: number, i: number) => {
            if(index < vowels.length - 1 &&
                i < row.length - 1 &&
                col === 1){
                if(vowels[index][i+1] === 1 && 
                    vowels[index+1][i] === 1 && 
                    vowels[index+1][i+1] === 1){
                        result = `${index}-${i}`;
                } else {
                    result = `not found`;
                }
            }
        })
    })

    return result || 'not found';
}