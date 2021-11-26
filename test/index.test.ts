import { server } from "@/server";
import supertest from "supertest";

const request = supertest(server);

describe("generic test runner", () => {

	it("should start an hhtp server", async () => {
		const response = await request.get("");
		expect(response.status).toBe(200);
		expect(response.text).toBe("hello world");
	});
});
