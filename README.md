# stringifile [![Build Status](https://travis-ci.org/zzarcon/stringifile.svg?branch=master)](https://travis-ci.org/zzarcon/stringifile) [![npm version](https://badge.fury.io/js/stringifile.svg)](https://www.npmjs.com/package/stringifile)

Node module for require file content wrapped in xml tags

### Showcase: Critical CSS path

**server.js**
```javascript
var stringifile = require('stringifile');
var criticalCss = stringifile('critical.css', 'style', './styles/');

```

**index.html**
```html
<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>Document</title>
    {{CRITICAL_CSS}}
  </head>
  <body>
    
  </body>
</html>
```

To see a live demo:

- `$ cd showcase`
- `$ npm i`
- `$ node server.js`
- Open [http://localhost:8080](http://localhost:8080)

# Stringifile

Returns the content of a file wrapped in xml tags.


**Parameters**

-   `fileName` **String** Name of the file

-   `tag` **String** Tag name

-   `dir` **[String]** Directory to find the file

-   `cb` **[Function]** Callback



**Examples**

```javascript
//Sync mode:
  var styles = stringifile('app.css', 'style', 'public/assets')

  //Async mode:
  stringifile('app.css', 'style', 'public/assets', function(error, contents) {
    var styles = contents;
  });
```



Returns **String** 



