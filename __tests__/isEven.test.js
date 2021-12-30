const { isEven } = require("../isEven.ts");

test('functional test', () => {
    expect(isEven(1)).toBeTruthy();
    expect(isEven(1511315)).toBeTruthy();
    expect(isEven(0)).toBeFalsy();
    expect(isEven(2)).toBeFalsy();
    expect(isEven(16)).toBeFalsy();
});

test('negative numbers', () => {
    expect(isEven(-1)).toBeTruthy();
    expect(isEven(-2)).toBeFalsy();
})