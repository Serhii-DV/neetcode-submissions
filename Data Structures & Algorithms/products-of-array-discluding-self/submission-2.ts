class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums: number[]): number[] {
        const output = [];
        const zeroIndexes = [];

        for (let i = 0; i < nums.length; i++) {
            if (nums[i] === 0) {
                zeroIndexes.push(i);
            }
        }

        if (zeroIndexes.length > 1) {
            return Array(nums.length).fill(0);
        }

        const zeroIdx = zeroIndexes.length === 1 ? zeroIndexes[0] : -1;

        for (let i = 0; i < nums.length; i++) {
            output[i] = (zeroIdx < 0 || zeroIdx === i) ? this.product(nums, i) : 0;
        }

        return output;
    }

    product(nums: number[], ignoreIdx: number): number {
        return nums.reduce(
            (prod, num, idx) => prod * (idx === ignoreIdx ? 1 : num), 
            1
        );
    }
}
