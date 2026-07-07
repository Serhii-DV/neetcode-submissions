class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {
        const str = s.toLowerCase().replace(/[^a-z0-9]/g, '');
        let reversed = '';

        for (let i = str.length - 1; i >= 0; i--) {
            reversed += str[i];
        }

        return str === reversed;
    }
}
