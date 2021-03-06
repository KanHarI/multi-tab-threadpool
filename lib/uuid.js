"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generate_uuid = void 0;
// eslint-disable-next-line @typescript-eslint/no-var-requires
const getRandomValues = require("get-random-values");
// Black magic from https://stackoverflow.com/a/2117523
function generate_uuid() {
    // @ts-ignore
    return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (c) => (c ^ (getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))).toString(16));
}
exports.generate_uuid = generate_uuid;
