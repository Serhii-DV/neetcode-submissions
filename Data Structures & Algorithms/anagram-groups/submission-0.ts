class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        const output = [];
        const map = new Map();

        strs.forEach((str) => {
            const sortedStr = this.sortStr(str);
            let mapData: string[] = [];

            if (map.has(sortedStr) && !Array.isArray(mapData = map.get(sortedStr))) {
                mapData = [];
            }
            
            mapData.push(str);

            map.set(sortedStr, mapData);
        });

        map.forEach((data, key) => output.push(data));

        return output;
    }

    sortStr(str: string): string {
        return str.split('').sort().join('');
    }
}
