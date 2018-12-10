var url = location.href;
var title = document.title;
var description = document.getElementsByName ('description').item(0).content;
var kw = document.getElementsByName ('keywords').item(0).content;
console.log(title + '\t' + description + '\t' + kw + '\t' + url);
// 