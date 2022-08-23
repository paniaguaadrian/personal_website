module.exports = {
    'setupFilesAfterEnv': ['<rootDir>/test/setupTest.js'],
    collectCoverage: true,
    coverageDirectory: 'coverage',
    testEnvironment: 'jsdom',
    test: /\.(sass|less|css)$/,
    loaders: ['style-loader', 'css-loader', 'less-loader'],
};
