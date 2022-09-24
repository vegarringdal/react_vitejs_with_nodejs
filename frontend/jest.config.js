module.exports = {
    testEnvironment: "jsdom",
    clearMocks: true,
    collectCoverageFrom: [],
    transform: {
        "^.+\\.(ts)$": [
            "ts-jest",
            {
                tsconfig: "<rootDir>/tsconfig.jest.json",
                diagnostics: false
            }
        ]
    }
};
