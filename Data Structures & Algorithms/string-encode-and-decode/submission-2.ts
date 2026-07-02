class Solution {
    #separator = '||';
    #emptyTag = '!EMPTY!';

    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs: string[]): string {
        if (strs.length === 0) {
            strs.push(this.#emptyTag);
        }
        return btoa(strs.join(this.#separator));
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str: string): string[] {
        const decoded = atob(str);
        if (decoded === this.#emptyTag) {
            return [];
        }
        return decoded.split(this.#separator);
    }
}
