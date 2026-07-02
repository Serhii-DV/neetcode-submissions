class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums: number[]): number[] {
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
        const hasZero = zeroIdx >= 0;

        let output = [];

        if (hasZero) {
            output = Array(nums.length).fill(0);
            output[zeroIdx] = this.product(nums, zeroIdx);
            return output;
        }

        const totalProduct = this.product(nums);

        for (let i = 0; i < nums.length; i++) {
            output[i] = totalProduct / nums[i];
        }

        return output;
    }

    product(nums: number[], ignoreIdx?: number): number {
        return nums.reduce(
            (prod, num, idx) => prod * (ignoreIdx && idx === ignoreIdx ? 1 : num), 
            1
        );
    }
}
