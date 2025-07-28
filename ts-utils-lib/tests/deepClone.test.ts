import { deepClone } from "../src/deepClone";
import { describe, expect, it } from "vitest";

describe('deepClone', () => {
    it('it clones nested object', () => {
        const original = {name:'Nima', address:{city:'Tehran'}}
        const clone = deepClone(original);
        expect(clone).toEqual(original);
        expect(clone).not.toBe(original);
    })
})