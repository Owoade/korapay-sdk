/** @type {import('ts-jest').JestConfigWithTsJest} */

import type {Config} from 'jest';

const config: Config = {
    transform: {
        "^.+\\.ts?$": "babel-jest"
    },
    clearMocks: true,
    moduleNameMapper: {
        '^@/(.*)$': '<rootDir>/src/$1',
    },
    modulePathIgnorePatterns: [
        './node_modules',
        './dist',
    ]
}

export default config;