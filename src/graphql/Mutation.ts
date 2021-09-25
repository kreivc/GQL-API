import { IMyContext } from "./../interface";
import { User } from ".prisma/client";
import { mutationType, stringArg } from "nexus";

export const Mutation = mutationType({
	definition(t) {
		t.boolean("registerUser", {
			args: {
				name: stringArg(),
				email: stringArg(),
				password: stringArg(),
				username: stringArg(),
			},
			resolve: async (
				_,
				{ ...userDetails }: Omit<User, "id">,
				{ prisma }: IMyContext
			) => {
				try {
					const newUser = await prisma.user.create({
						data: {
							...userDetails,
						},
					});
					console.log(newUser);
					return true;
				} catch (err) {
					console.log(err);
					const errorCaught: Error = err as Error;
					return new Error(errorCaught.message);
				}
			},
		});
	},
});
