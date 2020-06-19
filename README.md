# Greek Vocative Name

A tiny JS library that returns a Greek name in vocative case.

## How to use

```
npm install @desquared/greek-vocative-name
```

### CommonJS Build

CJS build for usage in node environment.

```
const {getVocativeName} = require('@desquared/greek-vocative-name');

getVocativeName('Τάκης');
```

### ES Modules Build

ESM build for usage in modern JS environments.

```
import {getVocativeName} from '@desquared/greek-vocative-name';

getVocativeName('Μάκης')
```

### Universal Module Definition Build

UMD build that works for both front and back end.

Just include the UMD script in your code and then use it like this:

```
greekVocativeName.getVocativeName('Μάκης');
```
