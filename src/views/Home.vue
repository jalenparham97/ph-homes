<template>
  <div class="home">
    <header>
      <Navbar />

      <div class="banner">
        <h1 class="banner-title txt-center">Let Us Help You Find Your Real Estate Solution</h1>

        <div class="action-btns">
          <md-button class="md-raised md-primary" @click="$router.push('/sell')">Sell Your Home</md-button>
          <md-button class="md-raised md-accent" @click="$router.push('/about')">Learn More</md-button>
        </div>
      </div>
    </header>

    <main>
      <!-- <h1 class="txt-center title">Improving Our Community, One Property At A Time</h1> -->
      
      <div class="everyone">
        <div class="pitch">
          <h2>Real Estate Solutions For Everyone</h2>
          <p>P&H Real Estate Solutions, LLC is the area’s leading real estate solutions company. We successfully work with homeowners, buyers, sellers, real estate agents, and real estate investors, buying and selling all types of residential real estate. We are confident that we can find the right property or solution for you, whether you have a house to sell, are looking to buy your next investment property, or are looking for your family’s “forever home.” We can share our knowledge so that you can make the best decisions for your situation and we are dedicated to make everyone's experience a smooth and successful process.</p>
        </div>

        <img src="../assets/img/solution.jpg" alt="">
      </div>
      <!-- <form>
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
      </form>     -->
    </main>

    <Footer/>
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
import Footer from '../components/Footer.vue'

export default {
  name: 'home', 
  sending: false,
  components: {
    Navbar,
    Footer
  }
  
}
</script>

<style lang="scss" scoped>
$primary-color: #C82027;
$accent-color: #051B3B;

header {
  height: 100vh;
  background: linear-gradient(0deg, rgba(0, 0, 0, .25), rgba(0, 0, 0, .25)), url('../assets/img/home-header.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  line-height: 1.5;

  & .banner-title {
    color: #fff;
    font-size: 3rem;
    margin-top: 100px;
    padding: 20px;
    font-weight: 500;
  }

  & .action-btns {
    display: flex;
    justify-content: center;
  }
}

.title {
  margin: 40px auto;
  font-size: 2rem;
  color: $primary-color;
  line-height: 1.2;
}

.everyone {
  display: flex;
  justify-content: space-around;
  margin: 50px auto;

  & .pitch {
    width: 500px;

    & h2 {
      font-size: 1.7rem;
      color: $accent-color;
    }

    & p {
      font-size: 1.2rem;
      line-height: 1.4;
    }
  }

  & img {
    width: 500px;
    height: 400px;
  }
}

form {
  padding: 20px;
  margin: 50px auto;
  display: flex;
  flex-direction: column;
  max-width: 700px;

  & h2 {
    font-size: 2rem;
    color: $accent-color;
  }

  & button {
    width: 100%;
    margin: 0 auto;
  }
}

@media only screen and (min-width: 746px) {

}
</style>

