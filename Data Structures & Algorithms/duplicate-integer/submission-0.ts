class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        if (nums.length < 2) return false;
        const sorted = nums.sort((a, b) => a - b);
        const length = sorted.length;
        let isSame = sorted[0] === sorted[1];
        if (isSame) {
            return true;
        }

        for (let i = 1; i < length - 1; i++) {
            isSame = sorted[i] === sorted[i+1];
            if (isSame) {
                return true;
            }
        }

        return false;
    }
}
