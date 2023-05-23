<template>
  <div class="news-by-category-container">
    <h2>More News</h2>
    <div class="articles">
      <!-- Loop through each category -->
      <div v-for="category in categories" :key="category.name" class="category">
        <!-- Link to the category's path and scroll to the top when clicked -->
        <router-link
          :to="'/' + category.path"
          class="category-title"
          @click="scrollToTop"
        >
          <h3>
            {{ category.name }}
            <font-awesome-icon icon="fa-chevron-right" class="chevron-right" />
          </h3>
        </router-link>
        <!-- Display articles within the category -->
        <div
          v-for="article in category.articles"
          :key="article.title"
          class="article"
        >
          <!-- Link to the article's URL and open in a new tab -->
          <a :href="article.url" target="_blank">{{ article.title }}</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // Array of categories and their respective articles
      categories: [
        {
          name: "Sports",
          path: "sports",
          articles: [
            // Article objects with title and URL
            {
              title:
                "Latest bracket, schedule and scores for 2023 NCAA men's tournament",
              url: "https://www.ncaa.com/news/basketball-men/mml-official-bracket/2023-03-16/latest-bracket-schedule-and-scores-2023-ncaa-mens-tournament",
            },
            {
              title:
                "Aaron Rodgers’ desire to play for the Jets proves irony is alive and well I The Rush",
              url: "https://sports.yahoo.com/aaron-rodgers-desire-to-play-for-the-jets-proves-irony-is-alive-and-well-i-the-rush-042157943.html?guccounter=1&guce_referrer=aHR0cHM6Ly9uZXdzLmdvb2dsZS5jb20v&guce_referrer_sig=AQAAAM4Ug29k-6nuQqGuOtYTqipFgO8d3qmrMS_nsN8jNA4T59nfCD5Vq6R-7eqJNlnPJWwYu16DZ5hHqidnXqV1Y8OfSunEI0oAS5miCx32opkVKMvGbE4KBhU8mqeuVIUjy-wMMSLyEX-IvZbcjS88-A_fBC06TDOWVobXFqcgUPis",
            },
            {
              title:
                "Edwin Díaz injury update: Mets closer to undergo imaging on right knee after getting hurt in WBC celebration",
              url: "https://www.cbssports.com/mlb/news/edwin-diaz-injury-update-mets-closer-to-undergo-imaging-on-right-knee-after-getting-hurt-in-wbc-celebration/",
            },
            {
              title:
                "Vinícius Jr. is being racially abused during LaLiga matches. Why is nobody being punished?",
              url: "https://edition.cnn.com/2023/03/15/football/vinicius-jr-racism-in-spanish-football-spt-intl/index.html",
            },
          ],
        },

        {
          name: "Business",
          path: "business",
          articles: [
            {
              title:
                "European markets cautiously higher; Credit Suisse soars after central bank backstop",
              url: "https://www.cnbc.com/2023/03/16/european-markets-live-updates-stocks-data-news-and-earnings.html",
            },
            {
              title:
                "No, ‘Wokeness’ Did Not Cause Silicon Valley Bank’s Collapse",
              url: "https://www.nytimes.com/2023/03/15/us/politics/silicon-valley-bank-collapse-woke-fact-check.html",
            },
            {
              title:
                "On SVB, White House fights comparisons to 2008 as Biden confronts bank crisis",
              url: "https://eu.usatoday.com/story/news/politics/2023/03/15/president-biden-fights-bailout-comparisons-2008-amid-bank-crisis/11477422002/",
            },
            {
              title:
                "Fully reimbursing SVB depositors may prove to be a bad move",
              url: "https://edition.cnn.com/2023/03/16/opinions/silicon-valley-bank-deposit-insurance-vron",
            },
          ],
        },

        {
          name: "Technology",
          path: "technology",
          articles: [
            {
              title: "Bing said to remove waitlist for its GPT-4 powered chat",
              url: "https://techcrunch.com/2023/03/16/bing-said-to-remove-waitlist-for-its-gpt-4-powered-chat/",
            },
            {
              title:
                "Here’s a closer look at how flat the Google Pixel 8 Pro’s display will be",
              url: "https://www.androidpolice.com/closer-look-how-flat-google-pixel-8-pro-display/",
            },
            {
              title:
                "Google stops selling its biz-grade augmented reality specs",
              url: "https://www.theregister.com/2023/03/16/google_enterprise_glass_discontinued/",
            },
            {
              title:
                "South Korea to build ‘world’s largest’ chip center with $230 billion investment from Samsung",
              url: "https://edition.cnn.com/2023/03/15/tech/korea-chips-investment-hnk-intl/index.html",
            },
          ],
        },

        {
          name: "Entertainment",
          path: "entertainment",
          articles: [
            {
              title:
                "Vanderpump Rules' Ariana Madix Breaks Silence on Tom Sandoval and Raquel Leviss Scandal",
              url: "https://www.eonline.com/news/1367289/vanderpump-rules-ariana-madix-breaks-silence-on-tom-sandoval-and-raquel-leviss-scandal",
            },
            {
              title:
                "Justin Bieber issues health update following Ramsay Hunt Syndrome diagnosis",
              url: "https://www.independent.co.uk/arts-entertainment/music/news/justin-bieber-face-mobility-ramsay-hunt-syndrome-b2301885.html",
            },
            {
              title:
                "Idris Elba teams up with media mogul Mo Abudu to nurture African film and TV talent",
              url: "https://edition.cnn.com/2023/03/16/entertainment/idris-elba-mo-abudu-partnership-intl-scli/index.html",
            },
            {
              title:
                "Michael Jordan's 1998 NBA Finals sneakers are expected to smash auction records",
              url: "https://edition.cnn.com/style/article/michael-jordan-sneakers-1998-finals-sothebys-auction/index.html",
            },
          ],
        },

        {
          name: "World",
          path: "general",
          articles: [
            {
              title:
                "Macron faces moment of truth as key vote on retirement age looms",
              url: "https://www.washingtonpost.com/world/2023/03/16/france-retirement-age-vote-macron/",
            },
            {
              title:
                "Ukraine Fighter Describes Being 'Sent to Death' When Deployed in Bakhmut",
              url: "https://www.newsweek.com/ukraine-fighter-describes-being-sent-death-when-deployed-bakhmut-1788066",
            },
            {
              title:
                "Japan and South Korea agree to mend ties as leaders meet following years of dispute",
              url: "https://edition.cnn.com/2023/03/15/asia/south-korea-yoon-japan-visit-regional-security-int-hnk/index.html",
            },
            {
              title:
                "Innovative aviation ideas shortlisted for 2023’s Crystal Cabin Awards",
              url: "https://edition.cnn.com/travel/article/crystal-cabin-awards-aviation-shortlist-2023/index.html",
            },
          ],
        },

        {
          name: "Science",
          path: "science",
          articles: [
            {
              title:
                "Magellan spacecraft images reveal volcanic activity on Venus",
              url: "https://edition.cnn.com/2023/03/15/world/venus-volcanic-activity-scn/index.html",
            },
            {
              title: "Webb telescope spots a star on the brink of exploding",
              url: "https://edition.cnn.com/2023/03/14/world/webb-telescope-wolf-rayet-star-scn/index.html",
            },
            {
              title:
                "How to reduce PFAS in your drinking water, according to experts",
              url: "https://edition.cnn.com/2023/03/14/health/pfas-water-filters-wellness/index.html",
            },
            {
              title:
                "Meet the dinosaur that had a record-breaking neck longer than a school bus",
              url: "https://edition.cnn.com/2023/03/15/world/dinosaur-with-record-long-neck-scn/index.html",
            },
          ],
        },
      ],
    };
  },

  methods: {
    // Function to scroll to the top of the page
    scrollToTop() {
      window.scrollTo(0, 0);
    },
  },
};
</script>

<style lang="scss" scoped>
.news-by-category-container {
  border-top: 1px solid #ccc;
}

a {
  text-decoration: none;
}

h2 {
  margin: 1.2rem 0;
}
.articles {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 50px;
  grid-row-gap: 20px;

  .category-title {
    h3 {
      margin-bottom: 1rem;
    }

    .chevron-right {
      font-size: 14px;
      margin-left: 0.2rem;
      transition: all 0.3s;
    }

    &:hover {
      .chevron-right {
        margin-left: 0.5rem;
      }
    }
  }
}

.article {
  margin-bottom: 0.8rem;
  a {
    color: rgba(52, 52, 52, 0.8);
    transition: all 0.3s;
    font-size: 1rem;

    &:hover {
      color: rgb(36, 36, 36);
    }
  }
}

@media (max-width: 990px) {
  .articles {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 800px) {
  .articles {
    grid-template-columns: repeat(1, 1fr);
  }
}
</style>
