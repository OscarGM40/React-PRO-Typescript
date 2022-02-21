module.exports = {
  roots: ['<rootDir>'],
  preset: 'ts-jest',
  collectCoverageFrom: [
    'src/**/*.{js{,x},ts{,x}}',
    '!src/index.tsx',
    '!src/custom.d.ts',
  ],
};