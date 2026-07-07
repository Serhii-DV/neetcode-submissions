class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board: string[][]): boolean {
        const boardCols: number[][] = [[], [], [], [], [], [], [], [], []],
            board3x3 = new Map<string, number[]>();

        for (let i = 0; i < board.length; i++) {
            const row = board[i].map(this.toNumber);

            if (!this.validateRow(row)) {
                return false;
            }

            const board3x3_y = (i - (i % 3)) / 3;

            for (let j = 0; j < row.length; j++) {
                const board3x3_x = (j - (j % 3)) / 3;
                const key = board3x3_y + "_" + board3x3_x;

                if (board3x3.has(key)) {
                    board3x3.get(key).push(row[j]);
                } else {
                    board3x3.set(key, [row[j]]);
                }

                boardCols[j].push(row[j]);
            }
        }

        for (let i = 0; i < 9; i++) {
            const colNumbers = boardCols[i];
            if (!this.validateRow(colNumbers)) {
                return false;
            }
        }

        for (const [key, nums] of board3x3) {
            if (!this.validateRow(nums)) {
                return false;
            }
        }

        return true;
    }

    toNumber(cell: string): number {
        return cell === "." ? 0 : Number(cell);
    }

    validateRow(row: number[]): boolean {
        const numbers = row.filter((n) => n > 0);
        return new Set(numbers).size === numbers.length;
    }
}
