export default async function getResults() {
    const articles = (await getArticles()).articles;
    console.log(articles);

    var newsResult = document.getElementById("load-news");
    newsResult.innerHTML = "";

    console.log(articles.length);

    for (var i = 0; i < articles.length; i++) {

        var news = document.getElementById("news-template");
        const node = document.importNode(news.content, true);

        var image = node.getElementById("news-image");
        image.src = articles[i].urlToImage;

        var link = node.getElementById("news-link");
        link.href = articles[i].url;

        var newstitle = node.getElementById("news-title");
        newstitle.innerHTML = articles[i].title;

        var sourcename = node.getElementById("source-name");
        sourcename.innerHTML = "Source: " + articles[i].source.name;

        var publisheddate = node.getElementById("published-At");
        publisheddate.innerHTML = "Published Date: " + articles[i].publishedAt;

        var describe = node.getElementById("description");
        describe.innerHTML = articles[i].description;

        newsResult.appendChild(node);
    }
}

async function getArticles() {
    const API_KEY = "842e7f4f59ff4f20abf8636343ab5e71";
    var URL = 'https://newsapi.org/v2/top-headlines?country=in&apiKey=' + API_KEY;

    const articles = await (await fetch(URL)).json();
    console.log(`Articles: ${JSON.stringify(articles)}`);

    return articles;
}