"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSchema = void 0;
const nexus_1 = require("nexus");
const Query_1 = require("./Query");
const path_1 = __importDefault(require("path"));
const getSchema = () => {
    const schema = (0, nexus_1.makeSchema)({
        types: [Query_1.Query],
        outputs: {
            schema: path_1.default.join(process.cwd(), "nexus", "schema.graphql"),
            typegen: path_1.default.join(process.cwd(), "nexus", "nexus.ts"),
        },
    });
    return schema;
};
exports.getSchema = getSchema;
//# sourceMappingURL=schema.js.map