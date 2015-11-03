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



