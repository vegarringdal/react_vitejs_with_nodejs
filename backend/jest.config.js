module.exports = {
    preset: "ts-jest",
    testEnvironment: "node",
    collectCoverageFrom: [],
    globals: {
        "ts-jest": {
            tsconfig: "tsconfig.json",
            diagnostics: false
        }
    }
};
