module.exports = {
    preset: "ts-jest",
    testEnvironment: "node",
    collectCoverageFrom: [],
    globals: {
        "ts-jest": {
            tsconfig: "<rootDir>/tsconfig.jest.json",
            diagnostics: false
        }
    }
};