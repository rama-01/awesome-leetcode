export class MagicDictionary {
    private dictionary: string[] = []

    buildDict(dictionary: string[]) {
        this.dictionary = dictionary
    }

    search(word: string) {
        outerLoop: for (let i = 0, n = this.dictionary.length; i < n; i++) {
            let p = this.dictionary[i]
            if (p.length !== word.length) continue
            let diff = 0
            for (let j = 0, m = p.length; j < m; j++) {
                if (p[j] !== word[j]) {
                    diff++
                }
                if (diff > 1) continue outerLoop
            }
            if (diff === 1) return true
        }
        return false
    }
}

const magicDictionary: MagicDictionary = new MagicDictionary()
magicDictionary.buildDict(['hello', 'leetcode'])
console.log(magicDictionary.search('hello')) // 返回 False
console.log(magicDictionary.search('hhllo')) // 将第二个 'h' 替换为 'e' 可以匹配 "hello" ，所以返回 True
console.log(magicDictionary.search('hell')) // 返回 False
console.log(magicDictionary.search('leetcoded')) // 返回 False


