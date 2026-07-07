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

            if (this.isAlphaNum(char)) {
                const lcChar = char.toLowerCase();
                str = str + lcChar;
                reversed = lcChar + reversed;
            }
        }

        return str === reversed;
    }

    isAlphaNum(char: string): boolean {
        return (
            (char >= '0' && char <= '9')   || // 0-9
            (char >= 'A' && char <= 'Z')   || // A-Z
            (char >= 'a' && char <= 'z')     // a-z
        );
    }

    toLowerCaseCode(code: number): number {
        return (code >= 65 && code <= 90) ? code + 32 : code;
    }
}
