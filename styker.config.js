module.exports = function (config) {
  config.set({
    files: [
      '!src/**/*.ts',
      {
        pattern: 'src/**/*.ts',
        mutated: true,
        included: false
      },
      '!src/**/__tests__/*.ts',
      {
        pattern: 'src/**/__tests__/*.ts',
        mutated: false,
        included: true
      }
    ],
    testRunner: 'jest',
    mutator: 'typescript',
    testFramework: 'jest',
    coverageAnalysis: 'off',
    reporter: ['progress', 'clear-text', 'dots', 'html', 'event-recorder'],
    tsconfigFile: 'tsconfig.json'
  });
};
