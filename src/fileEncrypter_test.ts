import { assertEquals } from "jsr:@std/assert";
import {
  getHashCode,
  hashCollisionCheck,
  int2Ushort,
} from "./fileEncrypter.ts";

Deno.test("Hash Collision Check", () => {
  const str1 = "";
  const hash1 = getHashCode(str1);
  assertEquals(hash1, 757602046);
  assertEquals(int2Ushort(hash1), 5886);
  assertEquals(hashCollisionCheck(str1), true);

  const str2 = "ZQG";
  const hash2 = getHashCode(str2);
  assertEquals(hash2, 1440880477);
  assertEquals(int2Ushort(hash2), 5981);
  assertEquals(hashCollisionCheck(str2), true);

  const str3 = "aaaaaaaaaaaaaaa";
  const hash3 = getHashCode(str3);
  assertEquals(hash3, -323829858);
  assertEquals(int2Ushort(hash3), 49054);
  assertEquals(hashCollisionCheck(str3), false);

  const str4 = "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa";
  const hash4 = getHashCode(str4);
  assertEquals(hash4, -1074378938);
  assertEquals(int2Ushort(hash4), 18246);
  assertEquals(hashCollisionCheck(str4), false);
});
