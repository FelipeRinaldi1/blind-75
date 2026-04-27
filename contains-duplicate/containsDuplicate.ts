function containsDuplicate(nums: number[]): boolean {
    const numbersSet = new Set<number>([]);

    for (let i = 0; i < nums.length; i++) {
        if (numbersSet.has(nums[i])) {
            return true;
        }
        numbersSet.add(nums[i]);
    }

    return false;
}
