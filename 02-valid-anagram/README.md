# Valid Anagram

From: [LeetCode](https://leetcode.com/problems/valid-anagram/)

## Problem Description

Given two strings `s` and `t`, return true if `t` is an anagram of `s`, and false otherwise.

## Initial Aproach

Sort both strings alphabetically using .sort() array function.

```typescript
function isAnagram(s: string, t: string): boolean {
    const sortS = s.split("").sort().join();
    const sortT = t.split("").sort().join();

    if (sortS === sortT) {
        return true;
    }

    return false;
}
```

Time complexity: O(n log n) due to sorting algorithm

## Optimal Solution

2 Maps which stores the letters and counting them. At the end compare each letter with each count.

Time complexity: O(n + m)

```typescript
function isAnagram(s: string, t: string): boolean {
    if (s.length != t.length) {
        return false;
    }
    const sMap = new Map<string, number>();
    const tMap = new Map<string, number>();

    for (const letter of s) {
        const count = sMap.get(letter) || 0;

        sMap.set(letter, count + 1);
    }
    for (const letter of t) {
        const count = tMap.get(letter) || 0;

        tMap.set(letter, count + 1);
    }

    for (const [letter, count] of sMap) {
        if (tMap.get(letter) !== count) {
            return false;
        }
    }
    return true;
}
```
