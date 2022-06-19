import type {Config} from '@jest/types';

const config: Config.InitialOptions = {
  verbose: true,
  preset: "ts-jest",
  testEnvironment: "node",
  testRegex: "./src/.*\\.(test|spec)?\\.(js|ts)$",
  moduleFileExtensions: ["ts", "js", "json", "node"],
  roots: ["<rootDir>/src"],
};
export default config;