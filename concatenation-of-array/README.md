# Concatenation of Array

You are given an integer array `nums` of length `n`. Create an array `ans` of length `2n` where `ans[i]` == `nums[i]` and `ans[i + n]` == `nums[i]` for `0 <= i < n` (0-indexed).

## First Aproach

The function spread the original array to times in the answer array.

Time complexity: O(2n)

```typescript
function getConcatenation(nums: number[]): number[] {
	const ans: number[] = [...nums, ...nums];
	return ans;
}
```

## Optimal aproach

In a loop, the nums array are spreaded in the first position and the first position + nums array lenght.
It iterate over the aray just one time, so its O(n) complexity.

Time complexity O(n)

```typescript
function getConcatenation(nums: number[]): number[] {
    const originalLenght = nums.length;
    const ans = new Array(originalLenght \* 2);

    for (let i = 0; i < originalLenght; i++) {
    	ans[i] = nums[i];
    	ans[i + originalLenght] = nums[i];
    }
    return ans;

}
```

## Outro

I dont think this is valid but... i used the array.concat() function

Time complexity: O(n)

```typescript
function getConcatenation(nums: number[]): number[] {
	const ans: number[] = nums.concat(nums);

	return ans;
}
```
