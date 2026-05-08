class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        const wordMap: { [key: string]: string[] } = {};

        for (let i = 0; i < strs.length; i++) {
            const currentStr = strs[i];

            const wordArray: number[] = new Array(26).fill(0);

            for (let j = 0; j < currentStr.length; j++) {
                const currentChar = currentStr.charAt(j);
                const index = currentChar.charCodeAt(0) - "a".charCodeAt(0);

                wordArray[index]++;
            }

            const key = JSON.stringify(wordArray);

            if (!(key in wordMap)) {
                wordMap[key] = [];
            }

            wordMap[key].push(currentStr);
        }

        return Object.values(wordMap);
    }
}