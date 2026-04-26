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
