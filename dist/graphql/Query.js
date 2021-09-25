"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Query = void 0;
const nexus_1 = require("nexus");
exports.Query = (0, nexus_1.queryType)({
    definition(t) {
        t.field("hello", {
            type: "String",
            resolve: () => "worlds",
        });
    },
});
//# sourceMappingURL=Query.js.map