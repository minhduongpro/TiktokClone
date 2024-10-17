// require normalized overrides
const { override, useBabelRc } = require("customize-cra");

module.exports = override(
    useBabelRc()
);