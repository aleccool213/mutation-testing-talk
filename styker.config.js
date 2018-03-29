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
      },
      '!src2/**/*.ts',
      {
        pattern: 'src2/**/*.ts',
        mutated: true,
        included: false
      },
      '!src2/**/__tests__/*.ts',
      {
        pattern: 'src2/**/__tests__/*.ts',
        mutated: false,
        included: true
      },
      '!src3/**/*.ts',
      {
        pattern: 'src3/**/*.ts',
        mutated: true,
        included: false
      },
      '!src3/**/__tests__/*.ts',
      {
        pattern: 'src3/**/__tests__/*.ts',
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
