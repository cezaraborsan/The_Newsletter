<template>
  <div class="results-container">
    <p class="search-results">
      Search results for:
      <span>{{ $route.params.searchTerm }}</span>
    </p>

    <div class="results-card" v-for="article in articles" :key="article.title">
      <div class="article-info">
        <span class="article-source">{{ article.source.name }}</span>
        <h3>
          <a class="article-title" target="_blank" :href="article.url">{{
            article.title
          }}</a>
        </h3>

        <p class="article-description">
          {{ article.description }}
        </p>
        <p class="article-author">
          By {{ article.author }}
          <span class="article-date">{{
            article.publishedAt.slice(0, 10)
          }}</span>
        </p>
      </div>

      <a :href="article.url" target="_blank">
        <img
          v-if="article.urlToImage"
          :src="article.urlToImage"
          alt="Article Image"
        />

        <img v-else src="../assets/unavailable-image.jpg" alt="Article Image" />
      </a>
    </div>
  </div>
</template>

<script>
import axios from "axios";
const newsApiKey = process.env.VUE_APP_API_KEY_NEWS;
export default {
  data() {
    return {
      articles: [],
      searchTerm: "",
    };
  },

  mounted() {
    this.searchTerm = this.$route.params.searchTerm;
    this.fetchArticles(this.searchTerm);
  },

  watch: {
    "$route.params.searchTerm": function (newSearchTerm) {
      this.searchTerm = newSearchTerm;
      this.fetchArticles(newSearchTerm);
    },
  },

  methods: {
    fetchArticles(searchTerm) {
      const searchArticles = {
        method: "GET",
        url: `https://newsapi.org/v2/everything?q=${searchTerm}&sortBy=popularity&pageSize=12&apiKey=${newsApiKey}`,
      };

      axios
        .request(searchArticles)
        .then((response) => {
          this.articles = response.data.articles;
          console.log(response.data.articles);
        })
        .catch((error) => {
          console.error(error);
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.search-results {
  padding-bottom: 2.5rem;
  color: #555;
  span {
    font-size: 20px;
    font-weight: bold;
    text-decoration: underline;
    color: #343434;
  }
}
.results-container {
  padding-top: 10rem;
  max-width: 70%;
  margin: 0 auto;
  overflow-y: hidden;
}

.results-card {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  border-top: 1px solid rgba(52, 52, 52, 0.5);
  border-bottom: 1px solid rgba(52, 52, 52, 0.5);
  padding-block: 1.5rem;
  margin-block: 1rem;

  .article-source {
    font-size: 13px;
    color: #555;
  }

  .article-title {
    font-size: 22px;
    color: #343434;
    text-decoration: none;
    a {
      color: #343434;
      text-decoration: none;
    }
  }

  .article-description {
    font-size: 16px;
    color: #555;
  }

  .article-author {
    font-size: 13px;
    line-height: 16px;
    font-style: italic;
    color: #555;
    font-weight: bold;
    span {
      font-weight: normal;
      display: block;
      margin-top: 5px;
    }
  }

  .article-info {
    margin-right: 3rem;
    width: 50%;
  }

  a {
    margin-right: 3rem;
    width: 50%;
    img {
      object-fit: cover;
      max-width: 800px;
      height: 100%;
      width: 100%;
    }
  }
}

@media (max-width: 1600px) {
  .results-container {
    max-width: 80%;
  }
}

@media (max-width: 1400px) {
  .results-container {
    max-width: 100%;
    margin-inline: 1.5rem;
  }
}

@media (max-width: 990px) {
  .search-results {
    padding: 1rem 0;

    span {
      font-size: 20px;
      font-weight: bold;
      text-decoration: underline;
      color: #343434;
    }
  }
  .results-container {
    padding-top: 4rem;
  }

  .results-card {
    display: flex;
    flex-direction: column-reverse;
    gap: 1rem;

    .article-info {
      margin-right: 0rem;
    }

    h3 {
      padding: 0.4rem 0;
    }

    img {
      max-width: 800px;
      margin-left: 0rem;
    }
  }
}
</style>
