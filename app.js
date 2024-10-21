document.addEventListener('DOMContentLoaded', function() {
  const moreNewsData = [
    {
      keyword: 'Technology Breakthrough',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80',
    },
    {
      keyword: 'Health and Wellness',
      image: 'https://images.unsplash.com/photo-1573497161645-8b60f78a6b33?auto=format&fit=crop&w=800&q=80',
    },
    {
      keyword: 'Economic Shifts',
      image: 'https://images.unsplash.com/photo-1602524810097-efc9ae67c1ab?auto=format&fit=crop&w=800&q=80',
    },
    {
      keyword: 'Climate Change',
      image: 'https://images.unsplash.com/photo-1542281286-9e0a16bb7366?auto=format&fit=crop&w=800&q=80',
    },
    {
      keyword: 'Global Conflicts',
      image: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?auto=format&fit=crop&w=800&q=80',
    },
    {
      keyword: 'Space Exploration',
      image: 'https://images.unsplash.com/photo-1504198453319-5ce911bafcde?auto=format&fit=crop&w=800&q=80',
    },
    {
      keyword: 'Cultural Trends',
      image: 'https://images.unsplash.com/photo-1533787761082-c992395f2b34?auto=format&fit=crop&w=800&q=80',
    }
  ];

  const moreNewsContainer = document.getElementById('more-news-container');
  moreNewsData.forEach(news => {
    const article = generateNewsItem(news.keyword, news.image);
    moreNewsContainer.appendChild(article);
  });

  // 滚动新闻条动态更新（模拟）
  const breakingNewsTicker = document.getElementById('breaking-news-ticker');
  setInterval(() => {
    const newsItems = [
      'Breaking: Major Global Political Crisis unfolds...',
      'Exclusive: New Technology Breakthrough announced...',
      'Health Alert: New Wellness Trends emerge...',
      'Economic Shifts: Markets react to latest news...',
      'Climate Change: Experts warn of severe impacts...'
    ];
    const randomNews = newsItems[Math.floor(Math.random() * newsItems.length)];
    breakingNewsTicker.innerHTML = `<p>${randomNews}</p>`;
  }, 15000); // 每15秒更新一次
});

function generateNewsItem(keyword, imageUrl) {
  const newsItem = document.createElement('div');
  newsItem.classList.add('news-item');

  const image = document.createElement('img');
  image.src = imageUrl;
  image.alt = `${keyword} image`;

  const newsContent = document.createElement('div');
  newsContent.classList.add('news-content');

  const title = document.createElement('h3');
  const link = document.createElement('a');
  link.href = `article.html?keyword=${encodeURIComponent(keyword)}`;
  link.innerText = `Breaking News: ${keyword} Shakes the World!`;
  title.appendChild(link);

  const content = document.createElement('p');
  content.innerText = `In a shocking turn of events, ${keyword.toLowerCase()} has captured the world's attention. Click to read more.`;

  newsContent.appendChild(title);
  newsContent.appendChild(content);
  newsItem.appendChild(image);
  newsItem.appendChild(newsContent);

  return newsItem;
}
