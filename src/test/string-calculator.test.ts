import { Add } from "../main/string-calculator";

describe("string calculator", () => {
  it("returns 0 when receiving an empty string", () => {
    expect(Add("")).toEqual(0);
  });
  it("returns the sum of 2 numbers received", () => {
    expect(Add("3,5")).toEqual(8);
  });
  it("returns the sum of all numbers received", () => {
    expect(Add("13,5,7,8")).toEqual(33);
  });
  it("returns the sum of all numbers when receiving a newline", () => {
    expect(Add("1\n2,3")).toEqual(6);
  });
});
