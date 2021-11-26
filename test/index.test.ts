import { Add } from "../src";

describe("generic test runner", () => {

	it("should add two numbers", () => {
		const sum = Add(1, 1);
		expect(sum).toEqual(2);
	});
});