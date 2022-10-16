import {HelloWorld} from "../src/HelloWorld"

describe("HelloWorld Should", () => {

    const helloWorld = new HelloWorld()

    test("return Hello World", () => {
        const expected = "Hello World"

        const actual = helloWorld.helloWorld()

        expect(expected).toEqual(actual)
    })

})