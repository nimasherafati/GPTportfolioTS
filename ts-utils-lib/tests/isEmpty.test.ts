import { isEmpty } from "../src/isEmpty";
import { describe, expect, it } from "vitest";

describe('isEmpty', () => {
    it('should return true for empty string', () => {
        expect(isEmpty('')).toBe(true);
    });
    it('it should return false for none-empty string', () => {
        expect(isEmpty('Hello')).toBe(false);
    });
})