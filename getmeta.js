var url = location.href;
var title = document.title;
var description = document.getElementsByName ('description').item(0).content;
var canonical_url = getCanonicalUrl();
console.log(url + '☆' + title + '☆' + description + '☆' + canonical_url)
function getCanonicalUrl() {
    var links = document.getElementsByTagName("link");
    for (var i = 0; i < links.length; i++) {
        if (links[i].rel) {
            if (links[i].rel.toLowerCase() == "canonical") {
                    return links[i].href;
            }
        }
    }
    return null;
}