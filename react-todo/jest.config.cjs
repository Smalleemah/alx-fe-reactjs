module.exports = {
  testEnvironment: "jsdom", // so Jest can simulate the browser environment
  transform: {
    "^.+\\.(js|jsx)$": "babel-jest", // tells Jest to use Babel for JS/JSX files
  },
  moduleFileExtensions: ["js", "jsx"], // files Jest will understand
};
