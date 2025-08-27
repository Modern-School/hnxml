/**
 * 模拟 Windows 下 x86 .net framwork 4.0 中 String.GetHashCode 的实现
 */
export function getHashCode(str: string): number {
  let num = 352654597;
  let num2 = num;

  let len = str.length;
  let i = 0;

  // 对齐 C#：for (num3 = Length; num3 > 2; num3 -= 4)
  for (; len > 2; len -= 4, i += 4) {
    // 小端：低16位=当前char，高16位=下一个char；越界补0
    const c0 = str.charCodeAt(i) | 0;
    const c1 = i + 1 < str.length ? str.charCodeAt(i + 1) : 0;
    const c2 = i + 2 < str.length ? str.charCodeAt(i + 2) : 0;
    const c3 = i + 3 < str.length ? str.charCodeAt(i + 3) : 0;

    const val1 = c0 | (c1 << 16); // *ptr2
    const val2 = c2 | (c3 << 16); // ptr2[1]

    // 关键：右移必须用 >>（算术右移），与 C# int 一致
    num = ((num << 5) + num + (num >> 27)) ^ val1;
    num2 = ((num2 << 5) + num2 + (num2 >> 27)) ^ val2;
  }

  // if (num3 > 0) 只再取一个 32 位（两个 char），越界补0
  if (len > 0) {
    const c0 = str.charCodeAt(i);
    const c1 = i + 1 < str.length ? str.charCodeAt(i + 1) : 0;
    const val = c0 | (c1 << 16);
    num = ((num << 5) + num + (num >> 27)) ^ val;
  }

  // 关键：32位乘法用 Math.imul，得到与 C# 相同的溢出结果
  return (num + Math.imul(num2, 1566083941)) | 0;
}

/**
 * 用于模拟 C# 中强制将 int 转换为 ushort 的行为
 */
export const int2Ushort = (num: number) => num & 0xFFFF;

/**
 * 检测该字符串拿去用于 `<encryptedFile>` 的 pass 的话，
 * 玩家在 Windows 版本的原版 Hacknet 会不会可以不需要密码来解密文件
 */
export const hashCollisionCheck = (pass: string): boolean =>
  ~~(int2Ushort(getHashCode(pass)) / 1822) === 3;
