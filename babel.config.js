module.exports = {
    "presets": ["babel-preset-expo"],
    "plugins": [
          ["module-resolver", {
          "extensions": [
            ".js",
            ".jsx",
            ".ts",
            ".tsx",
            ".android.js",
            ".android.tsx",
            ".ios.js",
            ".ios.tsx"
          ],
          "root": [
            "./"
          ],
          "alias": {
            "@tests": "tests/*",
            "@components/*": "src/components/*",
            "@utils/*": "src/utils/*"
          }
        }]
    ]       
  };