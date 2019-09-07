<template>
  <div class="home">
    <header>
      <div class="cover bg-left bg-center-l bg-image">
        <div class="bg-black-30 pb5 pb6-m pb7-l">
          <div class="tc pt4 pt5-m pt6-l ph3 header">
            <h1
              class="f2 f1-l white-90 mb0 lh-title"
            >Let Us Help You Find Your Real Estate Solutions</h1>
            <h2 class="f3 white-90 mt3 mb4 lh-copy">P & H Real Estate Solutions LLC</h2>
            <div class="action-btns mt3">
              <md-button class="md-raised md-primary" @click="go('/sell', 'sell')">Sell Your Home</md-button>
              <md-button class="md-raised md-accent" @click="go('/about', 'about')">Learn More</md-button>
            </div>
          </div>
        </div>
      </div>
    </header>

    <main>
      <div class="main-container">
        <div class="everyone">
          <div class="pitch-container eve">
            <div class="pitch">
              <h2>Real Estate Solutions For Everyone</h2>
              <p>P&H Real Estate Solutions, LLC is the area’s leading real estate solutions company. We successfully work with homeowners, buyers, sellers, real estate agents, and real estate investors, buying and selling all types of residential real estate. We are confident that we can find the right property or solution for you, whether you have a house to sell, are looking to buy your next investment property, or are looking for your family’s “forever home.” We can share our knowledge so that you can make the best decisions for your situation and we are dedicated to make everyone's experience a smooth and successful process.</p>
            </div>

            <img src="../assets/img/search-house.svg" alt />
          </div>
        </div>

        <div class="apart">
          <div class="pitch-container apt">
            <div class="pitch">
              <h2>What Sets Us Apart</h2>
              <p>At P&H Real Estate Solutions, LLC we specialize in buying and selling our homes at the price, and on the timeline, that works for both of us. Our extensive knowledge of real estate investing and large network of real estate investors nationwide allows us to offer more buying choices and a wide variety of selling options for all types of home buyers and sellers, including financially distressed homeowners. Our mission is to work hand in hand with all parties and to handle every situation with the utmost of professionalism and care.</p>
            </div>

            <img src="../assets/img/business.svg" alt />
          </div>
        </div>

        <div class="form-container">
          <div class="form-content">
            <div class="motto">
              <h1 class="txt-center title">Improving Our Community, One Property At A Time</h1>
              <div class="logo">
                <img src="../assets/img/ph-logo.png" alt />
              </div>
            </div>

            <form>
              <h2 class="txt-center">Contact Us Today</h2>

              <md-field>
                <label>Name</label>
                <md-input type="text"></md-input>
              </md-field>
              <md-field>
                <label>Email</label>
                <md-input type="email"></md-input>
              </md-field>
              <md-field>
                <label>Phone</label>
                <md-input type="tel"></md-input>
              </md-field>
              <md-field>
                <label>Message</label>
                <md-textarea type="text" md-autogrow></md-textarea>
              </md-field>
              <md-button class="md-raised md-primary">send</md-button>
            </form>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: "home",
  props: ["go"]
};
</script>

<style lang="scss" scoped>
$primary-color: #c82027;
$accent-color: #051b3b;

.bg-image {
  background: url("../assets/img/home-header-4.jpg");
}

.title {
  margin-bottom: 20px;
  font-size: 1.5rem;
  color: $accent-color;
  line-height: 1.2;
}

.logo {
  max-width: 500px;
  margin: 80px auto 70px auto;
}

.everyone,
.apart {
  display: flex;
  justify-content: space-around;

  & .pitch-container {
    display: flex;
    justify-content: space-around;
  }

  & .pitch {
    & h2 {
      font-size: 1.7rem;
      color: $primary-color;
    }

    & p {
      font-size: 1.2rem;
      line-height: 1.5;
    }
  }

  & img {
    width: 500px;
    height: 400px;
  }
}

.everyone {
  margin: 100px auto;
}

.apart {
  background: #eee;
  padding: 100px 0px;
  margin-bottom: 70px;
}

.apt {
  flex-direction: row-reverse;
}

.form-content {
  display: flex;
  justify-content: space-around;
  margin-bottom: 100px;
}

form {
  width: 500px;

  & h2 {
    font-size: 1.5rem;
    color: $accent-color;
  }

  & button {
    width: 100%;
    margin: 0 auto;
  }
}

@media only screen and (min-width: 1200px) {
  .pitch-container {
    width: 1500px;
    margin: 0 auto;
  }

  .form-content {
    max-width: 1500px;
    margin: 100px auto 100px auto;
  }
}

@media only screen and (max-width: 1200px) {
  .pitch-container {
    width: 1000px;

    & .pitch {
      & p {
        font-size: 1.05rem;
      }
    }

    & img {
      width: 400px;
      height: 300px;
    }
  }

  .form-content {
    max-width: 1000px;
    margin: 0px auto 100px auto;

    & .motto {
      width: 400px;
    }

    & form {
      width: 400px;
    }
  }
}

@media only screen and (max-width: 1000px) {
  .pitch-container {
    flex-direction: column;
    margin: 0 auto;
    width: 90%;

    & .pitch {
      width: 80%;
      text-align: center;
      margin: 0 auto;

      & p {
        line-height: 2;
      }
    }

    & img {
      width: 60%;
      margin: 70px auto auto auto;
    }
  }

  .form-content {
    flex-direction: column;

    & .motto {
      margin: 0 auto;
      width: 90%;
    }

    & form {
      width: 80%;
      margin: 0 auto;
    }
  }
}

@media only screen and (min-width: 900px) {
  .pitch {
    width: 500px;
  }
}

@media only screen and (max-width: 700px) {
  .everyone,
  .apart {
    & .pitch-container {
      flex-direction: column;
    }

    & .pitch {
      text-align: center;

      & h2 {
        font-size: 1.5rem;
        line-height: 1.5;
        color: $accent-color;
      }

      & p {
        font-size: 1rem;
        line-height: 2;
      }
    }

    & img {
      width: 80%;
    }
  }

  .everyone {
    margin-top: 40px;
  }

  .apart {
    padding: 30px 0px 90px 0px;
  }

  .form-content {
    flex-direction: column;
    padding: 20px;

    & .motto {
      margin: 0 auto;

      & h1 {
        line-height: 1.5;
        width: 90%;
        margin: 0 auto;
      }
    }

    & form {
      width: 90%;
      margin: 0 auto;
    }

    .logo {
      width: 90%;
    }
  }
}
</style>

