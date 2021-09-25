import { IMyContext } from "./interface";
import { getMyPrismaClient } from "./db/index";
import { getSchema } from "./graphql/schema";
import express from "express";
import { ApolloServer } from "apollo-server-express";

const main = async () => {
	const app = express();

	const schema = getSchema();
	const prisma = await getMyPrismaClient();

	const apolloServer = new ApolloServer({
		schema,
		context: ({ req, res }): IMyContext => ({ req, res, prisma }),
	});

	await apolloServer.start();

	apolloServer.applyMiddleware({ app });

	const PORT = process.env.PORT || 5000;

	app.listen(PORT, () => {
		console.log(`Server started on port ${PORT}`);
	});
};

main().catch((err) => {
	console.log(err);
});
