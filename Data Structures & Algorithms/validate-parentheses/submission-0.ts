class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s: string) {

        const stack = [];

        const pairs: { [key: string]: string } = {
            "(": ")",
            "[": "]",
            "{": "}"
        };
        const openings = new Set(Object.keys(pairs));
        const closings = new Set(Object.values(pairs));

        for (const char of s) {
            if (openings.has(char)) {
                stack.push(pairs[char]);
            }
            else if (closings.has(char)) {
                const top = stack.pop();
                if (top !== char) {
                    return false;
                }
            }
        }

        return stack.length === 0;

    }
}
