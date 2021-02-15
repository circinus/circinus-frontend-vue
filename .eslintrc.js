module.exports = {
    root: true,
    env: {
        node: true
    },
    extends: [
        'plugin:vue/essential',
        '@vue/standard',
        '@vue/typescript/recommended'
    ],
    parserOptions: {
        ecmaVersion: 2020
    },
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'indent': ["error", 4],
        '@typescript-eslint/interface-name-prefix': ["error", "always"],
        'space-before-function-paren': ["off"],
        "@typescript-eslint/ban-ts-ignore": ["off"],
        '@typescript-eslint/naming-convention': [
            "error",
            {
                "selector": "default",
                "format": ["camelCase",]
            },

            {
                "selector": "variable",
                "format": ["camelCase", "UPPER_CASE"]
            },
            {
                "selector": "parameter",
                "format": ["camelCase"],
                "leadingUnderscore": "allow"
            },

            {
                "selector": "memberLike",
                "modifiers": ["private"],
                "format": ["camelCase"],
            },

            {
                "selector": "typeLike",
                "format": ["PascalCase"]
            },
            {
                "selector": "property",
                "format": ["snake_case", "strictCamelCase"]
            }
        ],
        "@typescript-eslint/member-delimiter-style": ["error", {
            "multiline": {
                "delimiter": "semi",
                "requireLast": true
            },
            "singleline": {
                "delimiter": "semi",
                "requireLast": true
            }
        }]
    }
}
