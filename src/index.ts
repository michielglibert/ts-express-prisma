import "./pre-start"; // Must be the first import

import server from "./server";
import EnvVars from "./constants/EnvVars";

const port = EnvVars.Port || 3001;

server.listen(port, () => {
	console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
