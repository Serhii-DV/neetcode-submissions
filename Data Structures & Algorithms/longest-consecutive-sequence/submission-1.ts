class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums: number[]): number {
        if (!nums.length) {
            return 0;
        }

        const numSet = new Set(nums);
        const counts: number[] = [0];

        for (const num of numSet) {
            if (numSet.has(num - 1)) {
                let i = 1;
                while (numSet.has(num + i)) {
                    i++;
                }
                counts.push(i);
            }
        }

        return Math.max(...counts) + 1;
    }
}
