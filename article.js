const articleSection = document.getElementById("article");

// Get the article index from the URL
const urlParams = new URLSearchParams(window.location.search);
const articleIndex = urlParams.get("index");

// Mock data
async function fetchArticles() {
    const response = await fetch('articles.json');
    const data = await response.json();
    return data;
  }
  
  (async function () {
    const index = new URLSearchParams(window.location.search).get('index');
    const articles = await fetchArticles();
  
    if (index === null || index >= articles.length) {
      document.getElementById('article-container').innerHTML = `
        <h1>Article not found</h1>
        <p>The article you requested could not be found. Please go back to the homepage and try again.</p>
      `;
    } else {
      const article = articles[index];
      document.getElementById('article-title').innerText = article.title;
      document.getElementById('article-text').innerText = article.text;
    }
  })();
  
  

if (articleIndex !== null && articleIndex >= 0 && articleIndex < articles.length) {
  const article = articles[articleIndex];
  articleSection.innerHTML = `
    <h2>${article.title}</h2>
    <p>${article.text}</p>
  `;
} else {
  articleSection.innerHTML = `
    <h2>Article not found</h2>
    <p>The article you requested could not be found. Please go back to the homepage and try again.</p>
  `;
}
async function fetchArticles() {
    const response = await fetch('articles.json');
    const data = await response.json();
    return data;
  }
  