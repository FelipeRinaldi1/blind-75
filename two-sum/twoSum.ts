function twoSum(nums: number[], target: number): number[] {
	const map = new Map<number, number>();
	for (let i = 0; i < nums.length; i++) {
		const result = target - nums[i];
		if (map.has(result)) {
			return [map.get(result)!, i];
		}
		map.set(nums[i], i);
	}
	return [];
}

console.log(twoSum([0, 1, 2], 3));
