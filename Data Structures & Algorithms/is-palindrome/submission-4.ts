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

            if (this.isAlphaNumericCode(code)) {
                const lcChar = String.fromCharCode(this.toLowerCaseCode(code));
                str = str + lcChar;
                reversed = lcChar + reversed;
            }
        }

        return str === reversed;
    }

    isAlphaNumericCode(code: number): boolean {
        return (
            (code >= 48 && code <= 57)   || // 0-9
            (code >= 65 && code <= 90)   || // A-Z
            (code >= 97 && code <= 122)     // a-z
        );
    }

    toLowerCaseCode(code: number): number {
        return (code >= 65 && code <= 90) ? code + 32 : code;
    }
}
