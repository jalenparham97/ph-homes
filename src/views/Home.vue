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
            <md-icon class="pitch-icon md-primary">calendar_today</md-icon>
            <h2>Has your home listing expired?</h2>
          </div>
          <img src="../assets/img/calender.jpg" alt="Calender">
        </div>
        <div class="pitch reversed">
          <div class="pitch-title txt-center">
            <md-icon class="pitch-icon md-primary">build</md-icon>
            <h2>Is your home inneed of repairs?</h2>
          </div>
          <img src="../assets/img/tools.jpg" alt="Tools">
        </div>
        <div class="pitch">
          <div class="pitch-title txt-center">
            <md-icon class="pitch-icon md-primary">flash_on</md-icon>
            <h2>Do you need to sell your home quickly</h2>
          </div>
          <img src="../assets/img/fast.jpg" alt="Sprinter">
        </div>
      </div>

      <form class="md-layout">
        <md-card class="md-layout-item md-size-50 md-small-size-100 md-elevation-5">
          <md-card-header>
            <div class="md-primary txt-center md-title">Contact Us Today</div>
          </md-card-header>

          <md-card-content>
            <div class="md-layout md-gutter">
              <div class="md-layout-item md-small-size-100">
                <md-field>
                  <label for="first-name">First Name</label>
                  <md-input name="first-name" id="first-name" />
                </md-field>
              </div>

              <div class="md-layout-item md-small-size-100">
                <md-field>
                  <label for="last-name">Last Name</label>
                  <md-input name="last-name" id="last-name"/>
                </md-field>
              </div>
            </div>

            <md-field>
              <label for="email">Email</label>
              <md-input type="email" name="email" id="email" />
            </md-field>

            <md-field>
              <label>Message</label>
              <md-textarea md-autogrow></md-textarea>
            </md-field>
          </md-card-content>

          <md-progress-bar md-mode="indeterminate" v-if="sending" />

          <md-card-actions class="card-actions">
            <md-button type="submit" class="md-primary md-raised submit-btn" :disabled="sending">Send</md-button>
          </md-card-actions>
        </md-card>
      </form>
    </main>
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'

export default {
  name: 'home',
  sending: false,
  components: {
    Navbar
  }
  
}
</script>

<style lang="scss" scoped>
header {
  height: 97vh;
  background: linear-gradient(0deg, rgba(0, 0, 0, .25), rgba(0, 0, 0, .25)), url('../assets/img/home-header.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  line-height: 1.5;

  & .banner-title {
    color: #fff;
    font-size: 3rem;
    margin-top: 140px;
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
  margin-top: 50px;

  & .md-card {
    margin: 0 auto;
    padding-bottom: 20px;
  }

  & .md-card-actions {

    & button.submit-btn {
      margin: 0 auto;
    }
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

