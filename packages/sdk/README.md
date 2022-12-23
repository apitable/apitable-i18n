# apitable-i18n

`APITable i18n` is a a simple / easy-to-use / lightweight internationalization tool.

It provides:

- Use APITable to visual edit i18n strings.
- Use [`APITable Settings Generator`](https://github.com/apitable/apitable-settings-generator) to generate JSON settings.
- Use `Java` and `TypeScript` SDK as an i18n sdk runtime.


`APITable-i18n` has these advantages:

- WYSIWYG: Edit multi-languages on APITable's spreadsheet experience.
- Slim: Few codes and small.
- High Performance: Loader separated, support dynamic load easily.
- Extensible: OOP-design.

## SDKs
Imagine it, you have a `locales.json` file:

```json
{
  "en-US": {
    "text1": "This is text 1",
    "text2": "This is text 2"
  },
  "zh-CN": {
    "text1": "这是中文1"
  }
}
```

Then:


### TypeScript

Install APITable i18n :
```bash
npm i --save @apitable/i18n
```

```typescript
import { I18N, ILanguagePackerLoader, ILanguagePack } from '@apitable/i18n';
const languagePacks = require('./locales.json');
const i18n = I18N.createByLanguagePacks(languagePacks);
i18n.setLanguage('zh-CN');
const res = i18n.getText('text1')

console.log(res);
// will print '这是中文1';

```



### ~~Java~~

```java
// build.gradle
dependencies {
   compile group: 'com.apitable', name: 'i18n', version: '1.0.0'
}
```


## Generator

If you want to integration `@apitable/i18n` with APITable.

Go with [`APITable Settings Generator`](https://github.com/apitable/apitable-settings-generator).

### TODO: 1. APITable Template

You can get an APITable template that use for your i18n.

https://apitable.com/template/i18n


### 2. Generate settings

Use [apitable-settings-generator](https://github.com/apitable/apitable-settings-generator) and the `column-files` format to generate i18n languages packs.

The config.json:

```json
[
  {
    "dirName": "./generated",
    "fileName": "locales.*.json",
    "tables": {
      {
        "datasheetId": "dstbUhd5coNXQoXFD8",
        "datasheetName": "strings",
        "format": "column-files",
        "params": {}
      }
    }
  }
]
```

Run to generate i18n strings:

```bash
# run in bash
npx apitable-settings-generator --config config.json --token ${HERE_IS_YOUR_APITABLE_TOKEN}
```

Generated settings locales.en_US.json:

```json
{
  "strings": {
    "en_US": {
      "login_title": "Login APITable",
      "some text": "some text en_US"
    }
  }
}
```
Generated settings locales.zh_CN.json:

```json
{
  "strings": {
    "zh_CN": {
      "login_title": "中文APITable",
      "some text": "some text zh_CN"
    }
  }
}
```

Then you will get:
- locales.json
- ~~locales.interface.ts(quicktype)~~


### TODO: 3. Use SDKs to read them


## Development

```
yarn
yarn build
```