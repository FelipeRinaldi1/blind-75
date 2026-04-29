# Two Sum

from [Leetcode](https://leetcode.com/problems/two-sum/description/)

Given an array of integers nums and an integer target, return the indices i and j such that nums[i] + nums[j] == target and i != j.

You may assume that every input has exactly one pair of indices i and j that satisfy the condition.

Return the answer with the smaller index first.

## First Aproach

It define a variable which stores the first value of the sum, then search in the array again to find a different second value to be the second sum value. If the sum result equals to target value, return the indexes.

Time complexity: O(n²)

```typescript
function twoSum(nums: number[], target: number): number[] {
	for (let i = 0; i < nums.length; i++) {
		let first = nums[i];
		for (let j = 0; j < nums.length; j++) {
			let second = nums[j];
			if (i != j) {
				let result = first + second;
				if (result === target) {
					return [i, j];
				}
			}
		}
	}
	return [];
}
```

## Optimal Solution

First we declare a map witch stores the Value:Index
Then we iterate over the array, calculate the result of the x - number = target, if does the map have the result stored,
it returns the two indexes, otherwise it store the result value and the result index in the hashmap.

Time Complexity: O(n)

```typescript
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
```
