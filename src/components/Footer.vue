<template>
  <footer>
    <div class="container">
      <div>
        <router-link to="/" class="logo">The Newsletter</router-link>
      </div>

      <div class="row">
        <div class="col">
          <!-- News section -->
          <h5>News</h5>
          <ul>
            <li><a href="#">Business</a></li>
            <li><a href="#">Entertainment</a></li>
            <li><a href="#">General</a></li>
            <li><a href="#">Health</a></li>
            <li><a href="#">Science</a></li>
            <li><a href="#">Sports</a></li>
            <li><a href="#">Technology</a></li>
          </ul>
        </div>
        <div class="col">
          <!-- Help section -->
          <h5>Help</h5>
          <ul>
            <li><a href="#">FAQ</a></li>
            <li><a href="#">Terms &amp; Conditions</a></li>
            <li><a href="#">Circle Terms &amp; Conditions</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Cookie Settings</a></li>
          </ul>
        </div>

        <div class="col">
          <!-- Follow Us section -->
          <h5>Follow Us</h5>
          <ul class="social-icons">
            <li>
              <a href="#"
                ><font-awesome-icon
                  icon="fa-brands fa-facebook"
                  class="social-icon"
                />Facebook</a
              >
            </li>
            <li>
              <a href="#"
                ><font-awesome-icon
                  icon="fa-brands fa-instagram"
                  class="social-icon"
                />Instagram</a
              >
            </li>
            <li>
              <a href="#"
                ><font-awesome-icon
                  icon="fa-brands fa-twitter"
                  class="social-icon"
                />Twitter</a
              >
            </li>
            <li>
              <a href="#"
                ><font-awesome-icon
                  icon="fa-brands fa-youtube"
                  class="social-icon"
                />Youtube</a
              >
            </li>
            <li>
              <a href="#"
                ><font-awesome-icon
                  icon="fa-brands fa-twitch"
                  class="social-icon"
                />Twitch</a
              >
            </li>
          </ul>
        </div>

        <div class="col">
          <!-- Contact Us section -->
          <h5>Contact Us</h5>
          <p>
            123 Main Street, Suite 200<br />Anytown, USA 12345<br />Phone:
            555-555-5555<br />Email: info@thenewsletter.com
          </p>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col rights-reserved">
        <!-- Rights Reserved section -->
        <p>&copy; 2023 thenewsletter.com. All Rights Reserved.</p>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
footer {
  background-color: #fff;
  color: #343434;
  padding: 30px 0;
  border-top: 3px double #ccc;

  .logo {
    display: block;
    font-family: "Titan One", sans-serif;
    font-size: 24px;
    font-weight: bold;
    color: #ecd3b2;
    cursor: pointer;
    text-decoration: none;
    text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 5px 0 #000,
      1px 1px 0 #000;
    padding-bottom: 2.5rem;
  }

  .row {
    display: flex;
    justify-content: space-between;
  }

  .col {
    color: rgba(52, 52, 52, 0.7);
  }

  h5 {
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 20px;
    color: #343434;
  }

  p {
    font-size: 14px;
    line-height: 1.5;
    margin-bottom: 20px;
    color: rgba(52, 52, 52, 0.8);
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;

    li {
      margin-bottom: 10px;

      .social-icon {
        margin-right: 0.3rem;
      }

      a {
        color: rgba(52, 52, 52, 0.8);
        text-decoration: none;

        &:hover {
          text-decoration: underline;
          color: rgba(52, 52, 52, 1);
        }
      }
    }
  }

  .rights-reserved {
    width: 100%;
    text-align: center;
    border-top: 1px solid #ccc;
    margin-top: 1rem;

    p {
      padding-top: 10px;
    }
  }
}

@media (max-width: 990px) {
  footer {
    margin-inline: 1rem;
  }
  .row {
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
  }

  .row > *:not(:last-child) {
    border-bottom: 1px solid #ccc;
  }

  .col {
    padding-bottom: 0.8rem;
  }
}
</style>
