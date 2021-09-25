"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mutation = void 0;
const nexus_1 = require("nexus");
exports.Mutation = (0, nexus_1.mutationType)({
    definition(t) {
        t.boolean("registerUser", {
            args: {
                name: (0, nexus_1.stringArg)(),
                email: (0, nexus_1.stringArg)(),
                password: (0, nexus_1.stringArg)(),
                username: (0, nexus_1.stringArg)(),
            },
            resolve: (_, _a, { prisma }) => __awaiter(this, void 0, void 0, function* () {
                var userDetails = __rest(_a, []);
                try {
                    const newUser = yield prisma.user.create({
                        data: Object.assign({}, userDetails),
                    });
                    console.log(newUser);
                    return true;
                }
                catch (err) {
                    console.log(err);
                    const errorCaught = err;
                    return new Error(errorCaught.message);
                }
            }),
        });
    },
});
//# sourceMappingURL=Mutation.js.map