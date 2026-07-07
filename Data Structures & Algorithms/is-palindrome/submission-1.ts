class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {
        let str = '', reversed = '';

        for (let i = 0; i < s.length; i++) {
            const char = s[i];
            const code = char.charCodeAt(0);
            if (
                (code >= 48 && code <= 57)   || // 0-9
                (code >= 65 && code <= 90)   || // A-Z
                (code >= 97 && code <= 122)     // a-z
            ) {
                const lcChar = char.toLowerCase();
                str = str + lcChar;
                reversed = lcChar + reversed;
            }
        }

        return str === reversed;
    }
}
