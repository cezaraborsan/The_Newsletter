<template>
  <div class="results-container">
    <h1>{{ category }}</h1>

    <div class="results-card" v-for="article in articles" :key="article.title">
      <div class="article-info">
        <span class="article-source">{{ article.source.name }}</span>
        <h3>
          <a class="article-title" target="_blank" :href="article.url">{{
            article.title
          }}</a>
        </h3>

        <p v-if="article.description" class="article-description">
          {{ article.description }}
        </p>
        <p v-if="article.author" class="article-author">
          By {{ article.author }}
        </p>
        <span class="article-date">{{ article.publishedAt.slice(0, 10) }}</span>
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

export default {
  props: {
    category: {
      type: String,
      required: true,
    },
    api: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      articles: [],
    };
  },
  watch: {
    category: function (newCategory) {
      // Update the API URL when the category changes
      this.apis = this.api[newCategory];
      this.fetchArticles();
    },
  },
  mounted() {
    // Initialize the API URL and fetch articles on component mount
    this.apis = this.api[this.category];
    this.fetchArticles();
  },

  methods: {
    fetchArticles() {
      // Fetch articles from the API URL using Axios
      axios
        .get(this.api.url)
        .then((response) => {
          this.articles = response.data.articles;
        })
        .catch((error) => {
          console.error(error);
        });
    },
  },
};
</script>

<style lang="scss" scoped>
h1 {
  text-transform: capitalize;
  margin: 2rem 0;
  font-size: 40px;
}

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
  }

  .article-date {
    font-weight: normal;
    display: block;
    margin-top: 5px;
    color: #555;
    font-style: italic;
    font-size: 12px;
    margin-bottom: 0.8rem;
  }

  .article-info {
    margin-right: 3rem;
    width: 50%;
  }

  a {
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
  }
}

@media (max-width: 990px) {
  h1 {
    margin-inline: 1.2rem;
  }
  .search-results {
    padding: 1rem;

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
    flex-direction: column;
    margin-inline: 1.2rem;

    .article-info {
      margin-right: 0rem;
      width: 100%;
    }

    a {
      width: 100%;
    }
  }
}
</style>
