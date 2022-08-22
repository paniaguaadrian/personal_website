module.exports = {
    'setupFilesAfterEnv': ['<rootDir>/test/setupTest.js'],
    collectCoverage: true,
    coverageDirectory: 'coverage',
    testEnvironment: 'jsdom',
};
