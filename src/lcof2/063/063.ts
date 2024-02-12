export const replaceWords = (dictionary: Array<string>, sentence: string) => {
    const sen = sentence.split(' ')
    outerLoop: for (let i = 0, n = sen.length; i < n; i++) {
        for (let j = 0, m = sen[i].length; j < m; j++) {
            const words = dictionary.find((k) => k === sen[i].slice(0, j + 1))
            if (words) {
                sen[i] = words
                continue outerLoop
            }
        }
    }
    return sen.join(' ')
}

const dictionary = ["a", "aa", "aaa", "aaaa"], sentence = "a aa a aaaa aaa aaa aaa aaaaaa bbb baba ababa"
console.log(replaceWords(dictionary, sentence))
