<template>
  <div class="home">
    <div class="flex-container">
      <div class="news-container">
        <div
          class="daily-news"
          v-for="article in articles"
          :key="article.title"
        >
          <div class="news-info">
            <span class="article-source">{{ article.source.name }}</span>
            <h1>
              <a :href="article.url" target="_blank">{{ article.title }} </a>
            </h1>

            <p class="summary">
              {{ article.description }}
            </p>
            <p v-if="article.author" class="author">By: {{ article.author }}</p>
          </div>

          <a :href="article.url" target="_blank" class="article-img">
            <img
              v-if="article.urlToImage"
              :src="article.urlToImage"
              alt="Article Image"
            />

            <img
              v-else
              src="../assets/unavailable-image.jpg"
              alt="Article Image"
            />
          </a>
        </div>
      </div>

      <div class="world-news-container">
        <div
          v-for="article in articlesWorldWide"
          :key="article.title"
          class="world-news-info"
        >
          <div>
            <span class="article-source">{{ article.source.name }}</span>

            <a :href="article.url" target="_blank">
              <h3>{{ article.title }}</h3></a
            >
            <p class="summary">
              {{ article.description }}
            </p>
            <p v-if="article.author" class="author">By: {{ article.author }}</p>
          </div>

          <a :href="article.url" target="_blank" class="article-img">
            <img
              v-if="article.urlToImage"
              :src="article.urlToImage"
              alt="Article Image"
            />

            <img
              v-else
              src="../assets/unavailable-image.jpg"
              alt="Article Image"
            />
          </a>
        </div>
      </div>
    </div>
    <Culture />
    <News />
  </div>

  <!-- <div class="home">
    <div class="flex-container">
      <div class="news-container">
        <div class="daily-news">
          <div class="news-info">
            <span class="article-source">BBC News</span>
            <h1>
              <a href="#"
                >Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod,
                nobis.</a
              >
            </h1>
            <p class="summary">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae eum
              quos neque ducimus. Nisi, fuga vero tempora excepturi veritatis
              perspiciatis laudantium a earum dolorem, eum eaque!
            </p>
            <p class="author">By: John Doe</p>
          </div>
          <img src="../assets/homeview-bg.jpg" alt="Article Image" />
        </div>
        <div class="daily-news">
          <div class="news-info">
            <h1>
              <a href="#"
                >Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod,
                nobis.</a
              >
            </h1>
            <p class="summary">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae eum
              quos neque ducimus. Nisi, fuga vero tempora excepturi veritatis
              perspiciatis laudantium a earum dolorem, eum eaque!
            </p>
            <p class="author">By: John Doe</p>
          </div>
          <img src="../assets/homeview-bg.jpg" alt="Article Image" />
        </div>
        <div class="daily-news">
          <div class="news-info">
            <h1>
              <a href="#"
                >Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod,
                nobis.</a
              >
            </h1>
            <p class="summary">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae eum
              quos neque ducimus. Nisi, fuga vero tempora excepturi veritatis
              perspiciatis laudantium a earum dolorem, eum eaque!
            </p>
            <p class="author">By: John Doe</p>
          </div>
          <img src="../assets/homeview-bg.jpg" alt="Article Image" />
        </div>
        <div class="daily-news">
          <div class="news-info">
            <h1>
              <a href="#"
                >Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod,
                nobis.</a
              >
            </h1>
            <p class="summary">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae eum
              quos neque ducimus. Nisi, fuga vero tempora excepturi veritatis
              perspiciatis laudantium a earum dolorem, eum eaque!
            </p>
            <p class="author">By: John Doe</p>
          </div>
          <img src="../assets/homeview-bg.jpg" alt="Article Image" />
        </div>
        <div class="daily-news">
          <div class="news-info">
            <h1>
              <a href="#"
                >Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod,
                nobis.</a
              >
            </h1>
            <p class="summary">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae eum
              quos neque ducimus. Nisi, fuga vero tempora excepturi veritatis
              perspiciatis laudantium a earum dolorem, eum eaque!
            </p>
            <p class="author">By: John Doe</p>
          </div>
          <img src="../assets/homeview-bg.jpg" alt="Article Image" />
        </div>
      </div>

      <div class="world-news-container">
        <div class="world-news-info">
          <img src="../assets/homeview-bg.jpg" alt="Article Image" />
          <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
          <p class="author">By: John Doe</p>
        </div>
        <div class="world-news-info">
          <img src="../assets/homeview-bg.jpg" alt="Article Image" />
          <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
          <p class="author">By: John Doe</p>
        </div>
        <div class="world-news-info">
          <img src="../assets/homeview-bg.jpg" alt="Article Image" />
          <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
          <p class="author">By: John Doe</p>
        </div>
        <div class="world-news-info">
          <img src="../assets/homeview-bg.jpg" alt="Article Image" />
          <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
          <p class="author">By: John Doe</p>
        </div>
        <div class="world-news-info">
          <img src="../assets/homeview-bg.jpg" alt="Article Image" />
          <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
          <p class="author">By: John Doe</p>
        </div>
        <div class="world-news-info">
          <img src="../assets/homeview-bg.jpg" alt="Article Image" />
          <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
          <p class="author">By: John Doe</p>
        </div>
      </div>
    </div>
    <News />
    <Culture />

  </div> -->
</template>

<script>
import axios from "axios";
import News from "../components/News";
import Culture from "../components/Culture";
const newsApiKey = process.env.VUE_APP_API_KEY_NEWS;
console.log(newsApiKey);
export default {
  components: {
    News,
    Culture,
  },

  data() {
    return {
      articles: [],
      articlesWorldWide: [],
    };
  },

  mounted() {
    this.fetchArticles();
    this.fetchWorldWideArticles();
  },

  methods: {
    fetchArticles() {
      axios
        .get(
          `https://newsapi.org/v2/top-headlines?country=us&pageSize=8&category=general&apiKey=${newsApiKey}`
        )
        .then((response) => {
          this.articles = response.data.articles;
        })
        .catch((error) => {
          console.log(error);
        });
    },

    fetchWorldWideArticles() {
      axios
        .get(
          `https://newsapi.org/v2/everything?q=war&sortBy=popularity&pageSize=13&apiKey=${newsApiKey}`
        )
        .then((response) => {
          this.articlesWorldWide = response.data.articles;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600&display=swap");
@import url("https://fonts.googleapis.com/css2?family=IBM+Plex+Serif:wght@300;400;500;600&display=swap");
@mixin summary {
  color: rgba(52, 52, 52, 0.6);
  font-size: 14px;
  margin: 0.3rem 0 0;
}

@mixin author {
  font-style: italic;
  font-weight: bold;
  color: rgba(52, 52, 52, 0.8);
  font-size: 12px;
  margin: 0.5rem 0 0;
}

@mixin article-source {
  font-size: 13px;
  color: #555;
}

.home {
  position: relative;
  font-family: "Poppins", sans-serif;
  margin: 10rem 0 2rem;
}

.flex-container {
  display: flex;
  justify-content: space-between;
}

a {
  text-decoration: none;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: "IBM Plex Serif", sans-serif;
  margin: 0;
  color: #000;
  a {
    color: #000;
  }
}

.author {
  @include author;
}

.news-container {
  padding: 0 2.5rem 0 0;
}

.news-container > *:not(:last-child) {
  border-bottom: 1px solid #ccc;
  padding-bottom: 2rem;
}

.daily-news {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-direction: row;
  gap: 1rem;
  margin: 2rem 0;

  .news-info {
    max-width: 50%;

    .article-source {
      @include article-source;
    }
  }

  h1 {
    font-size: 1.2rem;
    padding: 0.4rem 0;
  }

  .summary {
    @include summary;
  }

  .article-img {
    width: 50%;
    img {
      object-fit: cover;
      max-width: 800px;
      height: 100%;
      width: 100%;
    }
  }
}

.world-news-container {
  border-left: 1.5px solid #ccc;
  padding: 0 1.5rem;
  margin-block: 2rem;

  .article-source,
  .summary,
  .author {
    display: none;
  }

  .summary {
    @include summary;
  }

  .author {
    @include author;
  }

  .article-source {
    @include article-source;
  }
}

.world-news-info {
  max-width: 500px;
  width: 100%;
  min-width: 250px;
  margin-bottom: 2rem;
  width: 100%;
  img {
    width: 100%;
    height: 100%;
  }
  h3 {
    font-size: 1rem;
    padding-bottom: 0.8rem;
  }
}

@media (max-width: 1100px) {
  .daily-news {
    display: flex;
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;
    width: 100%;

    .news-info {
      max-width: 100%;
    }

    .article-img {
      width: 100%;

      img {
        max-width: 600px;
      }
    }
  }
}

@media (max-width: 990px) {
  .home {
    margin: 4rem 1rem 0 1rem;
  }
}

@media (max-width: 800px) {
  .flex-container {
    display: flex;
    flex-direction: column;
  }

  .news-container {
    max-width: 100%;
    padding: 0;
    border-bottom: 1px solid #ccc;
  }

  .world-news-container {
    border-left: none;
    padding: 0;
    margin-block: 1rem;

    .article-source,
    .summary,
    .author {
      display: block;
    }
  }

  .world-news-container > *:not(:last-child) {
    border-bottom: 1px solid #ccc;
    padding-bottom: 3rem;
  }

  .world-news-info {
    max-width: 100%;
    width: 100%;
    margin: 3rem 0;
    display: flex;
    flex-direction: column-reverse;
    gap: 1rem;

    img {
      width: 100%;
      height: 100%;
    }
    h3 {
      font-size: 1.2rem;
      padding: 0.4rem 0;
    }
  }
}
</style>
