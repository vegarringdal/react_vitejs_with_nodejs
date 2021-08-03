module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    collectCoverageFrom: [],
    globals: {
        'ts-jest': {
            tsconfig: 'tsconfig.jest.json',
            diagnostics: false
        }
    }
};
