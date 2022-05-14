export function longestConsec(strarr: string[], k: number): string {
    let max = '';
    const n = strarr.length;
  
    for (let i = 0; i <= n - k && k > 0 && k <= n; i++) {
      const newStr = strarr.slice(i, i + k).join('');
      max = max.length >= newStr.length ? max : newStr;
    }
    return max;
  }

  console.log(longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], 2));