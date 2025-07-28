import { capitalize } from "../src/capitalize";
import { describe, expect, it } from "vitest";

describe('capitalize', () => {
    it('it capitalizes the first letter', () => {
        expect(capitalize('nima')).toBe('Nima')
    });
    it('it returns empty string for empty input' , () => {
        expect(capitalize('')).toBe('')
    });
})