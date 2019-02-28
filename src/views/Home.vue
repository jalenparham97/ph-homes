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
      <div class="pitch-container">
        <div class="pitch">
          <div class="pitch-title txt-center">
            <md-icon class="pitch-icon md-primary"><i class="far fa-calendar-times"></i></md-icon>
            <h2>Has your home listing expired?</h2>
          </div>
          <img src="../assets/img/calender.jpg" alt="Calender">
        </div>
        <div class="pitch reversed">
          <div class="pitch-title txt-center">
            <md-icon class="pitch-icon md-primary"><i class="fas fa-tools"></i></md-icon>
            <h2>Is your home inneed of repairs?</h2>
          </div>
          <img src="../assets/img/tools.jpg" alt="Tools">
        </div>
        <div class="pitch">
          <div class="pitch-title txt-center">
            <md-icon class="pitch-icon md-primary"><i class="fas fa-bolt"></i></md-icon>
            <h2>Do you need to sell your home quickly</h2>
          </div>
          <img src="../assets/img/fast.jpg" alt="Sprinter">
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
header {
  height: 99vh;
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

.pitch-container {
  margin-top: 50px;

  & .pitch {
    margin-bottom: 20px;

    & .pitch-title {
      padding: 40px;
      line-height: 1.3;

      & .md-icon.pitch-icon {
        font-size: 3rem !important;
      }

      & h2 {
        font-size: 2rem;
        font-weight: 500;
      }
    }
  } 
}

form {
  padding: 20px;
  margin: 50px auto;
  display: flex;
  flex-direction: column;
  max-width: 700px;

  & button {
    width: 100%;
    margin: 0 auto;
  }
}

@media only screen and (min-width: 746px) {
  .pitch {
    display: flex;

    & img {
      width: 500px;
      // height: 500px;
      flex: 3;
      height: 400px;
    }
  }
}
</style>

