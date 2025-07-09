interface RemapPorts {
  [key: number]: number;
}
/**
 * `<portRemap>`元素内容生成器
 * @returns 标准的`<portRemap>`元素内容
 */
export function portRemap(obj: RemapPorts): string {
  const remapList: string[] = [];
  for (let i in obj) {
    remapList.push(`${i}=${obj[i]}`);
  }
  return remapList.join(",");
}
