const newsSection = document.getElementById("news");
const previousButton = document.getElementById("previous");
const nextButton = document.getElementById("next");
const modal = document.getElementById("article-modal");
const closeModal = document.getElementsByClassName("close")[0];
const modalTitle = document.getElementById("modal-title");
const modalText = document.getElementById("modal-text");

const articlesPerPage = 5;
let currentPage = 0;

// Mock data
const articles = [
    {
        title: 'Hungary Announces New Economic Measures',
        summary: 'The Hungarian government has announced new economic measures to boost the country\'s growth...',
        text: 'The Hungarian government has announced new economic measures to boost the country\'s growth and support small businesses. The new initiatives include tax breaks, low-interest loans, and grants for startups. These measures are expected to have a positive impact on the economy and create more job opportunities for citizens...'
      },
      {
        title: 'Budapest Airport Expansion Plans Revealed',
        summary: 'Budapest Airport has revealed its expansion plans to accommodate increasing passenger traffic...',
        text: 'Budapest Airport has revealed its expansion plans to accommodate increasing passenger traffic and improve its facilities. The airport will construct a new terminal, extend its runways, and upgrade the existing infrastructure. These improvements aim to increase the airport\'s capacity and enhance the travel experience for passengers...'
      },
      {
        title: 'Hungarian Scientists Make Breakthrough in Renewable Energy',
        summary: 'Researchers from a Hungarian university have made a groundbreaking discovery in renewable energy technology...',
        text: 'Researchers from a Hungarian university have made a groundbreaking discovery in renewable energy technology. The team has developed a new method to increase the efficiency of solar panels by harnessing energy from a wider spectrum of sunlight. This breakthrough could potentially revolutionize the renewable energy sector and reduce our dependence on fossil fuels...'
      },
      {
        title: 'Hungary Wins Gold at International Sports Championship',
        summary: 'Hungarian athletes have won gold medals in multiple events at an international sports championship...',
        text: 'Hungarian athletes have won gold medals in multiple events at an international sports championship. Competing in swimming, gymnastics, and track & field, the athletes demonstrated exceptional skill and determination, earning Hungary a top spot in the medal tally. The victories have been celebrated by fans and government officials alike, showcasing the nation\'s athletic prowess...'
      },
      {
        title: 'Cultural Festival Celebrates Hungarian Traditions',
        summary: 'A week-long cultural festival in Hungary is showcasing the country\'s rich history and traditions...',
        text: 'A week-long cultural festival in Hungary is showcasing the country\'s rich history and traditions. The event features music, dance, food, and art exhibitions that highlight the nation\'s diverse heritage. Visitors from around the world have flocked to the festival, providing a boost to local tourism and fostering a greater appreciation for Hungarian culture...'
      }
  ].filter(article => article.title && article.summary && article.text);
  
  async function fetchArticles() {
    const response = await fetch('articles.json');
    const data = await response.json();
    return data;
  }
  
  async function displayArticles() {
    const articles = await fetchArticles();
    newsSection.innerHTML = "";
  
    for (
      let i = currentPage * articlesPerPage;
      i < (currentPage + 1) * articlesPerPage && i < articles.length;
      i++
    ) {
      const article = articles[i];
      const articleElement = document.createElement("article");
  
      articleElement.innerHTML = `
        <h2>${article.title}</h2>
        <p>${article.summary}</p>
        <a href="article.html?index=${articles.indexOf(article)}" class="read-more">Read More</a>
      `;
      newsSection.appendChild(articleElement);
    }
  
    updatePaginationButtons();
  }
  

function updatePaginationButtons() {
  previousButton.disabled = currentPage === 0;
  nextButton.disabled = currentPage >= Math.ceil(articles.length / articlesPerPage) - 1;
}
  

previousButton.addEventListener("click", () => {
  currentPage--;
  displayArticles();
});

nextButton.addEventListener("click", () => {
  currentPage++;
  displayArticles();
});

newsSection.addEventListener("click", (event) => {
  if (event.target.classList.contains("read-more")) {
    const articleIndex = event.target.dataset.index;
    const article = articles[articleIndex];

    modalTitle.textContent = article.title;
    modalText.textContent = article.text;
    modal.style.display = "block";
  }
});

closeModal.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (event) => {
  if (event.target == modal) {
    modal.style.display = "none";
  }
});

displayArticles();

// ... (keep the existing code from the previous version of scripts.js)

function displayArticles() {
    newsSection.innerHTML = "";
  
    for (let i = currentPage * articlesPerPage; i < (currentPage + 1) * articlesPerPage && i < articles.length; i++) {
      const article = articles[i];
      const articleElement = document.createElement("article");
  
      articleElement.innerHTML = `
        <h2>${article.title}</h2>
        <p>${article.summary}</p>
        <a href="article.html?index=${i}" class="read-more">Read More</a>
      `;
      newsSection.appendChild(articleElement);
    }
  
    updatePaginationButtons();
  }
  displayArticles();

  // ... (keep the existing code from the previous version of scripts.js)
  