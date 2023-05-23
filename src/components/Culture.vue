<template>
  <div class="culture-articles-container">
    <h2>Culture and Lifestyle</h2>
    <div class="articles">
      <div v-for="article in articles" :key="article.title" class="article">
        <img :src="article.img" alt="Article Image" />
        <h3>
          <a :href="article.url" target="_blank">{{ article.title }}</a>
        </h3>
      </div>
    </div>
  </div>
</template>

<script>
// Import article images
import article1Img from "../assets/culture_img_article_1.jpg";
import article3Img from "../assets/culture_img_article_3.jpg";
import article4Img from "../assets/culture_img_article_4.jpg";
import article5Img from "../assets/culture_img_article_5.jpg";
import article6Img from "../assets/culture_img_article_6.jpg";

export default {
  data() {
    return {
      articles: [
        {
          // Article 1
          img: article1Img,
          title: "The Face that launched a dozen imitators",
          url: "https://www.economist.com/1843/2017/11/15/the-face-that-launched-a-dozen-imitators",
        },

        {
          // Article 2
          img: article3Img,
          title: "Lifestyles of the rich and infamous",
          url: "https://www.economist.com/china/2015/07/02/lifestyles-of-the-rich-and-infamous",
        },
        {
          // Article 3
          img: article4Img,
          title: "Cocoa by candlelight",
          url: "https://www.economist.com/europe/2016/09/29/cocoa-by-candlelight?frsc=dg%7Cc",
        },
        {
          // Article 4
          img: article5Img,
          title: "How can I be more productive?",
          url: "https://www.economist.com/1843/2018/01/05/how-can-i-be-more-productive",
        },
        {
          // Article 5
          img: article6Img,
          title: "Reading corporate culture from the outside",
          url: "https://www.economist.com/business/2022/07/07/reading-corporate-culture-from-the-outside",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.culture-articles-container {
  border-top: 1px solid #ccc;
  margin-bottom: 1rem;
}

a {
  text-decoration: none;
}

h2 {
  margin: 1.2rem 0;
}
.articles {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-column-gap: 20px;
}

.article {
  margin-bottom: 0.8rem;

  img {
    width: 100%;
    max-width: 300px;
    height: 150px;
    object-fit: cover;
  }
}

h3 {
  font-size: 1rem;
}

@media (max-width: 1100px) {
  .articles {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 800px) {
  .articles {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
