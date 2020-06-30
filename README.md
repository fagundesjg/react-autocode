# How to Install

## First you need to add npm package to you project dev dependencies.


```yarn add react-autocode -D ``` 
or  
```npm install react-autocode --save-dev```

## After that you need add the script in ```package.json``` to use code generator in your cli.

```json
 {
     ...,
    "scripts": {
        ...,
      "generate:page": "node ./node_modules/react-autocode/dist/index.js"
    }
 }
```


# Examples

By default all generated contents are generated in ```src``` folder.

```
yarn generate:page Test
``` 
This example create a ```react-typescript```file in src folder.

```
yarn generate:page pages/Test
``` 
This example create a ```react-typescript```file in src/pages folder.

# Credits

github: github.com/fagundesjg

insta: _dinhoduarte