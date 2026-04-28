import http from 'node:http';
import express from 'express'
import { Socket } from 'socket.io';

async function main(){

	const PORT = process.env.PORT ?? 8000

	const app = express() 
	const server = http.createServer(app)
	const io = new Server()

	io.attach(server)


	server.listen(PORT, () => {
		console.log(`Server running on PORT: ${PORT}`);
	})
}