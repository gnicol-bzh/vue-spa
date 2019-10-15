module.exports = {
    root: true,
    parserOptions: {
        parser: "babel-eslint"
    },
    extends: ["standard", "plugin:vue/recommended"],
    plugins: ["html"],
    /*rules: {
        indent: ["error", 4],
        "vue/html-indent": ["error", 4],
        "vue/script-indent": [
            "error",
            4
        ]
    },*/
    rules: {
        "array-element-newline": ["off"],
        "comma-dangle": ["error", "always-multiline"],
        "consistent-this": ["error", "self"],
        "dot-location": ["error", "property"],
        "dot-notation": [
            "warn",
            {
                allowKeywords: true,
                allowPattern: "^[a-z]+(_[a-z]+)+$"
            }
        ],
        "function-paren-newline": ["warn", "consistent"],
        "guard-for-in": ["error"],
        "implicit-arrow-linebreak": ["warn", "beside"],
        indent: ["warn", 4],
        "key-spacing": [
            "warn",
            {
                beforeColon: false,
                afterColon: true,
                mode: "strict"
            }
        ],
        "object-curly-spacing": [
            "error",
            "always",
            {
                arraysInObjects: true,
                objectsInObjects: true
            }
        ],
        "object-property-newline": [
            "error",
            {
                allowAllPropertiesOnSameLine: true
            }
        ],
        "no-unused-vars": ["warn"],
        "no-console": [
            "warn",
            {
                allow: ["info", "debug", "warn", "error"]
            }
        ],
        "quote-props": ["error", "as-needed"],
        quotes: [
            "error",
            "single",
            {
                avoidEscape: true
            }
        ],
        radix: ["error", "as-needed"],
        semi: ["error", "never"],
        "space-before-function-paren": ["error", "never"],
        "wrap-iife": ["error", "inside"],
        "vue/html-indent": ["warn", 4]
    },
    overrides: [
        {
            files: ["*.vue"],
            rules: {
                indent: "off"
            }
        }
    ]
};
