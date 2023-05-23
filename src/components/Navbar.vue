<template>
  <nav class="navbar" :class="{ active: isSearchActive }">
    <div class="logo-bar-content">
      <div class="date" v-html="getCurrentDate()"></div>
      <div>
        <router-link to="/" class="logo" @click="scrollTop()"
          >The Newsletter</router-link
        >
      </div>
      <div class="weather-card">
        <div class="description">
          <img id="icon" src="" alt="Weather Icon" />
          <span id="temp"></span>
        </div>
        <div class="location">
          <span id="city"></span>
          <span id="country"></span>
        </div>
      </div>
    </div>

    <div class="navbar-content">
      <div class="nav-links">
        <button @click="toggleMenu" id="hamburger-btn">
          <font-awesome-icon icon="fa-bars" id="hamburger-icon" />
        </button>

        <div :class="{ links: true, active: showMenu }">
          <font-awesome-icon
            @click="closeMenu"
            icon="fa-xmark"
            id="close-icon"
          />
          <router-link to="/business" @click="closeMenu">Business</router-link>
          <router-link to="/entertainment" @click="closeMenu"
            >Entertainment</router-link
          >
          <router-link to="/general" @click="closeMenu">General</router-link>
          <router-link to="/health" @click="closeMenu">Health</router-link>
          <router-link to="/science" @click="closeMenu">Science</router-link>
          <router-link to="/sports" @click="closeMenu">Sports</router-link>
          <router-link to="/technology" @click="closeMenu"
            >Technology</router-link
          >

          <div class="search-form-container">
            <button @click="toggleSearch" class="search-btn">
              <font-awesome-icon
                icon="fa-magnifying-glass"
                class="search-icon"
              />
            </button>

            <form
              class="searchForm"
              :class="{ active: isSearchActive }"
              @submit.prevent="search"
            >
              <input
                v-model="searchTerm"
                type="text"
                placeholder="Search..."
                @keydown.enter="search"
                ref="searchInput"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  </nav>
  <div class="menu-overlay" v-if="showMenu" @click="showMenu = false"></div>
</template>

<script>
import axios from "axios";
const weatherApiKey = process.env.VUE_APP_API_KEY;
export default {
  emits: ["search"],
  data() {
    return {
      isSearchActive: false, // Indicates if the search input is active
      showMenu: false, // Indicates if the menu is visible
      focusInput: false,
      searchTerm: "", // Holds the value of the search term
    };
  },

  mounted() {
    this.getWeather(); // Fetch weather data when the component is mounted
  },

  methods: {
    toggleSearch() {
      this.isSearchActive = !this.isSearchActive; // Toggles the search input's active state
      if (this.isSearchActive) {
        this.$nextTick(() => this.$refs.searchInput.focus()); // Focuses on the search input field
      }
    },

    toggleMenu() {
      this.showMenu = !this.showMenu; // Toggles the visibility of the menu
      if (this.showMenu) {
        document.body.style.overflow = "hidden"; // Disables scrolling when the menu is open
      } else {
        document.body.style.overflow = ""; // Enables scrolling when the menu is open
      }
    },

    closeMenu() {
      this.showMenu = false; // Closes the menu
      document.body.style.overflow = "";
      window.scrollTo(0, 0);
    },

    search() {
      // Perform search if the search term is not empty
      if (this.searchTerm.trim() !== "") {
        this.$router.push(`/search/${this.searchTerm}`);
        this.searchTerm = ""; // Resets the search term
        this.isSearchActive = false;
        this.showMenu = false;
        document.body.style.overflow = "";
        window.scrollTo(0, 0);
      }
    },

    getWeather() {
      // Fetches weather data from an API and updates the UI
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;

          axios
            .get(
              `https://api.weatherapi.com/v1/current.json?key=${weatherApiKey}&q=${latitude},${longitude}`
            )
            .then((response) => {
              const weatherData = response.data;
              const cityElement = document.getElementById("city");
              const countryElement = document.getElementById("country");
              const iconElement = document.getElementById("icon");
              const tempElement = document.getElementById("temp");

              cityElement.innerText = `${weatherData.location.name}, `;
              countryElement.innerText = weatherData.location.country;
              iconElement.src = `https:${weatherData.current.condition.icon}`;
              tempElement.innerText = `${weatherData.current.temp_c}°C `;
            })
            .catch((error) => {
              console.log(error);
            });
        },
        (error) => {
          console.log(`Error retrieving user location: ${error.message}`);
          axios
            .get(
              `https://api.weatherapi.com/v1/current.json?key=${weatherApiKey}&q=London`
            )
            .then((response) => {
              const weatherData = response.data;
              const cityElement = document.getElementById("city");
              const countryElement = document.getElementById("country");
              const iconElement = document.getElementById("icon");
              const tempElement = document.getElementById("temp");

              cityElement.innerText = `${weatherData.location.name}, `;
              countryElement.innerText = weatherData.location.country;
              iconElement.src = `https:${weatherData.current.condition.icon}`;
              tempElement.innerText = `${weatherData.current.temp_c}°C `;
            })
            .catch((error) => {
              console.log(error);
            });
        }
      );
    },

    getCurrentDate() {
      const date = new Date();
      const daysOfWeek = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ];
      const monthNames = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];

      const dayOfWeek = daysOfWeek[date.getDay()];
      const month = monthNames[date.getMonth()];
      const dayOfMonth = date.getDate();
      const year = date.getFullYear();

      return `${dayOfWeek}<br/>${month}, ${dayOfMonth}, ${year} `;
    },

    scrollTop() {
      window.scrollTo(0, 0);
    },
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Odibee+Sans&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Titan+One&display=swap");
@import "~normalize.css";

.menu-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0);
  z-index: 999;
}

.navbar {
  font-family: "Poppins", sans-serif;
  position: fixed;
  top: 0;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  padding: 1.5rem 0;
  z-index: 9999;
  transition: all 0.2s ease-in-out;
  background-color: #fff;
  width: 80%;
}

.navbar::after {
  content: "";
  display: block;
  height: 3px;
  background-color: #fff;
  border-top: 4px solid #000;
  border-bottom: 1px solid #000;
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
}

.navbar-content {
  margin: 0 auto;
  z-index: 9999;
}

.weather-card {
  width: 100px;
  font-size: 12px;
  font-weight: bold;

  .location {
    margin-bottom: 10px;
    text-align: center;
  }

  .description {
    display: flex;
    align-items: center;
  }

  #icon {
    height: 40px;
  }
}
.logo-bar-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.date {
  font-size: 12px;
  font-weight: bold;
}

.logo {
  display: block;
  font-family: "Titan One", sans-serif;
  font-size: 48px;
  font-weight: bold;
  color: #ecd3b2;
  cursor: pointer;
  text-decoration: none;
  text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 5px 0 #000,
    1px 1px 0 #000;

  a {
    margin: 0;
  }
}

.nav-links {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  a {
    font-size: 16px;
    text-decoration: none;
    color: #343434;
    position: relative;
    transition: all 0.3s;
    text-transform: lowercase;
    cursor: pointer;
  }

  a:after {
    content: "";
    position: absolute;
    width: 100%;
    height: 2px;
    bottom: -2px;
    left: 0;
    background-color: #343434;
    visibility: hidden;
    transform: scaleX(0);
    transition: all 0.3s ease-in-out;
  }

  a:hover {
    color: #343434;
  }

  a:hover::after {
    visibility: visible;
    transform: scaleX(1);
  }
}

.links {
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 1rem;
}

.search-form-container {
  position: relative;
}

.search-btn {
  background-color: transparent;
  color: #343434;
  transition: all 0.3s ease-in-out;
  border-radius: 5px;
  padding: 0;
  border: none;
  cursor: pointer;

  .search-icon {
    font-size: 16px;
  }
}

.searchForm {
  position: absolute;
  top: -4px;
  right: -1rem;
  background-color: #fff;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  z-index: 9998;
  transition: all 0.4s;
  transform: translateX(100%);
  display: none;

  input[type="text"] {
    border: none;
    border-radius: 4px;
    font-size: 14px;
    border: 1px solid rgba(52, 52, 52, 0.4);
    padding: 0.3rem 0.6rem;
  }
}

.searchForm.active {
  display: block;
}

#hamburger-btn {
  background: transparent;
  border: none;
  display: none;
  cursor: pointer;

  #hamburger-icon {
    font-size: 20px;
    color: #343434;
  }
}

#close-icon {
  display: none;
}

#overlay {
  position: fixed;
  display: none;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 2;
  cursor: pointer;
}

#overlay.active {
  display: block;
}

@media screen and (max-width: 990px) {
  .navbar {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    .navbar-content {
      margin: 0 0.2rem 0 0;
    }

    .logo {
      margin: 0 0 0 0.5rem;
      font-size: 24px;
    }
  }

  .searchForm {
    display: block;
    position: static;
    transform: translateX(0%);
    top: 0;
    right: 0;

    input[type="text"] {
      font-size: 16px;
      max-width: 100%;
    }
  }

  .search-btn {
    display: none;
  }

  #hamburger-btn {
    display: block;
  }

  .links {
    display: flex;
    flex-direction: column;
    justify-content: start;
    height: 100svh;
    width: 40%;
    position: fixed;
    top: 0;
    right: -100%;
    background-color: #ffffff;
    padding: 5rem 2rem 0 1rem;
    transition: all 0.4s;
    border-left: 1px solid #343434;

    a {
      color: #343434;
      text-transform: capitalize;
      font-size: 20px;
    }

    a::after {
      content: "";
      display: block;
      width: 0;
      height: 2px;
      background-color: #343434;
      transition: width 0.3s ease-in-out;
      margin-top: 0.3rem;
    }

    a:hover::after {
      width: 100%;
    }

    #close-icon {
      display: block;
      position: absolute;
      top: 1.5rem;
      right: 0.8rem;
      font-size: 20px;
      cursor: pointer;
    }
  }

  .links.active {
    right: 0%;
  }

  .date,
  .weather-card {
    display: none;
  }
}

@media (max-width: 500px) {
  .navbar {
    .logo {
      font-size: 20px;
    }

    .nav-links {
      gap: 1rem;
    }
  }
}

.links {
  width: 50%;
}
</style>
