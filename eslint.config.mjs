import js from '@eslint/js';
import react from 'eslint-plugin-react';
import hooks from 'eslint-plugin-react-hooks';
import globals from 'globals';
export default [
 {ignores:['.next/**','node_modules/**','recovered/**','download/**','page*.js','layout.js','script.js']},
 {files:['app/**/*.js','components/**/*.js','lib/**/*.js','lib/**/*.mjs','tests/**/*.mjs'],
  languageOptions:{ecmaVersion:'latest',sourceType:'module',parserOptions:{ecmaFeatures:{jsx:true}},globals:{...globals.browser,...globals.node}},
  plugins:{react,'react-hooks':hooks},settings:{react:{version:'detect'}},
  rules:{...js.configs.recommended.rules,...react.configs.recommended.rules,...hooks.configs.recommended.rules,'react/react-in-jsx-scope':'off','react/prop-types':'off','react/no-unescaped-entities':'off'}},
];
