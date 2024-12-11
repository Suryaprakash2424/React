import sum from "../sum";

test("sum of 2 numbers", () => {
    const result = sum(10, 20);

    expect(result).toBe(30);
})