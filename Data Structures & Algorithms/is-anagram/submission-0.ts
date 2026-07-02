class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        if (s.length !== t.length) return false;

        const s_sorted = s.split('').sort().join('');
        const t_sorted = t.split('').sort().join('');

        return s_sorted === t_sorted;
    }
}
