export default module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
  },
  testMatch: ["**/__test__/**/*.spec.(ts|tsx)"],
  transform: {
    "^.+\\.(js|ts|tsx)$": "ts-jest",
  },
}
