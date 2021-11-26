import http, { IncomingMessage, ServerResponse } from "http";

const requestListener = async (_: IncomingMessage, res: ServerResponse): Promise<void> => {
	res.writeHead(200);
	res.end("hello world");
};

export const server = http.createServer(requestListener);
