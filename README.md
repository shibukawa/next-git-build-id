# next-git-build-id

Write git HEAD's hash as next.js's BUILD_ID.

## usage

```sh
$ npm install --save-dev next-git-build-id
```

```json:package.json
{
    "scripts": {
        "build": "npm-run-all -s build:next build:build-id",
        "build:next": "next build",
        "build:build-id": "next-git-build-id"
    }
}
```
