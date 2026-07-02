class Solution {
    #separator = "$";

    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs: string[]): string {
        if (strs.length === 0) return '';

        const sizes: string[] = strs.map((s) => String(s.length));
        const encoded = sizes.join(',') + this.#separator + strs.join('');
        return encoded;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str: string): string[] {
        if (str === '') return [];
        const separatorIndex = str.indexOf(this.#separator);
        const sizesStr = str.slice(0, separatorIndex);
        const parts = str.slice(separatorIndex + 1);
        const sizes = sizesStr.split(',').map((v) => Number(v));

        const strs: string[] = [];
        let start = 0;
        for (let size of sizes) {
            const part = parts.slice(start, start + size);
            strs.push(part);
            start += size;
        }

        return strs;
    }
}
