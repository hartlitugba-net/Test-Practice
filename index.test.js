import {capitalize,reverseString,calculator,caesarCipher,analyzeArray }from './index.js';
test("ilk karakteri büyük harfe dönüştürmeli", () => {
    expect(capitalize("hello")).toBe("Hello");

});
test("stringi tersine çevirmeli", () => {
    expect(reverseString("hello")).toBe("olleh");
});
test("toplama işlemi doğru çalışmalı", () => {
    expect(calculator.add(2, 3)).toBe(5);
});
test("çıkarma işlemi doğru çalışmalı", () => {
    expect(calculator.subtract(5, 3)).toBe(2);
});
test("çarpma işlemi doğru çalışmalı", () => {
    expect(calculator.multiply(2, 3)).toBe(6);
});
test("bölme işlemi doğru çalışmalı", () => {
    expect(calculator.divide(6, 3)).toBe(2);
});

test("harfleri 3 karakter ileri kaydırmalı", () => {
    expect(caesarCipher("hello", 3)).toBe("khoor");
});

test("alfabenin sonundan başına dönmeli", () => {
    expect(caesarCipher("xyz", 3)).toBe("abc");
});

test("büyük harfleri ve noktalama işaretlerini korumalı", () => {
    expect(caesarCipher("HeLLo, World!", 3)).toBe("KhOOr, Zruog!");
});

test("dizinin analizini doğru yapmalı", () => {
    expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
        average: 4,
        min: 1,
        max: 8,
        length: 6
    });
});

