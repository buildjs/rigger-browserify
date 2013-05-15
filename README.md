# rigger-browserify

The `rigger-browsersify` plugin is used to include a piece of code that requires [browserification](https://github.com/substack/node-browserify) into a non-browserified project:

```js
//=browserify src/test
```

In thise case, the `src/test.js` file would contain code that would be expected in normal browserify process.

## Using Transforms

If you wish to use browserify transforms in your app, then you can specify these after the source file transform:

```js
//=browserify src/test [brfs]
```

In the case above, you will also need to include [brfs](https://github.com/substack/brfs) into the `devDependencies` of your project.