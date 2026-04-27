function getConcatenation(nums: number[]): number[] {
	const originalLenght = nums.length;
	const ans = new Array(originalLenght * 2);

	for (let i = 0; i < originalLenght; i++) {
		ans[i] = nums[i];
		ans[i + originalLenght] = nums[i];
	}
	return ans;
}
