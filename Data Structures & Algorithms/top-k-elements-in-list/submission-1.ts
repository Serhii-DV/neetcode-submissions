class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        const map = new Map();

        for (let i = 0; i < nums.length; i++) {
            let num = nums[i];
            map.set(num, map.has(num) ? map.get(num) + 1 : 1);
        }

        const counts = [...map.values()].sort((a, b) => a - b);
        const minMaxKCount = counts[counts.length - k];
        const output = [];

        map.forEach((count, num) => {
            if (count >= minMaxKCount) {
                output.push(num);
            }
        });

        return output;
    }
}
