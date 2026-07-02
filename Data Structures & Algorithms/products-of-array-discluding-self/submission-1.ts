class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums: number[]): number[] {
        const output = [];

        for (let i = 0; i < nums.length; i++) {
            output[i] = this.product(nums, i);
        }

        return output;
    }

    product(nums: number[], ignoreIdx: number): number {
        return nums.reduce((prod, num, idx) => prod * (idx === ignoreIdx ? 1 : num), 1);
    }
}
