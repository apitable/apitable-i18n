# apitable-i18n-generator

APITable i18n Generator is a a simple / easy-to-use / lightweight internationalization tool.

It provides:

- Use APITable to visual edit i18n strings.
- Use [`APITable Settings Generator`](https://github.com/apitable/apitable-settings-generator) to generate JSON settings.
- Use `Java` and `TypeScript` SDK as an i18n runtime.


APITable i18n generator has these advantages:

- WYSIWYG: Edit multi-languages on APITable's spreadsheet experience.
- Slim: Few codes and small.
- High Performance: Loader separated, support dynamic load easily.
- Extensible: OOP-design.

## Template

You can get an APITable template that use for your i18n.

https://apitable.com/template/i18n


## Generator

```bash
npx apitable-i18-generator --url http://apitable.com/dstYOURSTRINGSTABLE --token ${YOUR_APITABLE_TOKEN} --output ./i18n-generated
```

Then you will get:
- locales.json
- locales.interface.ts

## SDKs

### TypeScript

Install APITable i18n generator:
```bash
npm i --save apitable-i18n
```

Import to your project:

```typescript
import { I18N } from 'apitable-i18n';
const languagePacks = require('locales.json');
const i18n = I18N.createByLanguagePacks(languagePacks, getLanguage());

console.log(i18n.getText("string:keyname"));
```



### Java

```java
// build.gradle
dependencies {
   compile group: 'com.apitable', name: 'i18n', version: '1.0.0'
}
```