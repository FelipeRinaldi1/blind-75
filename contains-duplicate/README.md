# 01 - Contains Duplicate

From: [LeetCode](https://leetcode.com/problems/contains-duplicate/)

## Problem Description

Given an integer array `nums`, return `true` if any value appears at least twice in the array, and return `false` if every element is distinct.

## Initial aproaching:

I used nested loops to compare the original array against the duplicates array.

complexity: O(n^2)

## Optimal solution:

I implemented a Set to store seen numbers. Instead of iterating through a list to find the duplicates, the Set allows O(1) look-ups.

complexity: O(n)

## Solution in Typescript

```typescript
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
```
