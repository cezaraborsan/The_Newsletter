import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import SearchView from "../views/SearchView.vue";
import CategoryView from "../views/CategoryView.vue";

const newsApiKey = process.env.VUE_APP_API_KEY_NEWS;

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },

  {
    path: "/search/:searchTerm",
    name: "search",
    component: SearchView,
  },

  {
    path: "/business",
    name: "business",
    component: CategoryView,
    props: {
      category: "business",
      api: {
        url: `https://newsapi.org/v2/top-headlines?language=en&category=business&pageSize=8&apiKey=${newsApiKey}`,
      },
    },
  },
  {
    path: "/entertainment",
    name: "entertainment",
    component: CategoryView,
    props: {
      category: "entertainment",
      api: {
        url: `https://newsapi.org/v2/top-headlines?language=en&category=entertainment&pageSize=8&apiKey=${newsApiKey}`,
      },
    },
  },
  {
    path: "/general",
    name: "general",
    component: CategoryView,
    props: {
      category: "general",
      api: {
        url: `https://newsapi.org/v2/top-headlines?language=en&category=general&pageSize=8&apiKey=${newsApiKey}`,
      },
    },
  },

  {
    path: "/health",
    name: "health",
    component: CategoryView,
    props: {
      category: "health",
      api: {
        url: `https://newsapi.org/v2/top-headlines?language=en&category=health&pageSize=8&apiKey=${newsApiKey}`,
      },
    },
  },
  {
    path: "/science",
    name: "science",
    component: CategoryView,
    props: {
      category: "science",
      api: {
        url: `https://newsapi.org/v2/top-headlines?language=en&category=science&pageSize=8&apiKey=${newsApiKey}`,
      },
    },
  },
  {
    path: "/sports",
    name: "sports",
    component: CategoryView,
    props: {
      category: "sports",
      api: {
        url: `https://newsapi.org/v2/top-headlines?language=en&category=sports&pageSize=8&apiKey=${newsApiKey}`,
      },
    },
  },
  {
    path: "/technology",
    name: "technology",
    component: CategoryView,
    props: {
      category: "technology",
      api: {
        url: `https://newsapi.org/v2/top-headlines?language=en&category=technology&pageSize=8&apiKey=${newsApiKey}`,
      },
    },
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
