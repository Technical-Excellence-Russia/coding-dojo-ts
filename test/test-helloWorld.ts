import {HelloWorld} from "../src/HelloWorld"

describe("HelloWorld Should", () => {
    let helloWorld: HelloWorld;

    beforeEach(() => {
        helloWorld = new HelloWorld();
    });

    test("return Hello World", () => {
        const expected = "Hello World";
        const actual = helloWorld.helloWorld();
        expect(actual).toBe(expected);
    });

    test("return string type", () => {
        const result = helloWorld.helloWorld();
        expect(typeof result).toBe('string');
    });
});