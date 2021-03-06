module.exports = {
    "env": {
        "es6": true,
        "node": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "sourceType": "module"
    },
    "rules": {
        "indent": [
            "error",
            "tab",
            { "SwitchCase": 1 }
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "warn",
            "single"
        ],
        "semi": [
            "error",
            "always"
        ],
        "no-console": 0,
        "strict": [
            "error", 
            "global"
        ],
        "no-var": "warn",
        "prefer-const": "warn",
		"no-dupe-keys": "error",
		"no-func-assign": "error",
		"no-unreachable": "error",
		"default-case": "error",
		"no-else-return": "warn",
		"block-spacing": "error",
		"key-spacing": ["error", { "mode": "strict" }],
		"no-trailing-spaces": "warn",
		"no-useless-constructor": "error",
		"prefer-template": "error",
		"no-shadow": "error",
		"no-unneeded-ternary": "error",
		"multiline-ternary": ["warn", "always-multiline"],
		"no-console": 0
    }
};
