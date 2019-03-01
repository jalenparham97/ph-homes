<template>
  <div class="about">
    <Navbar/>
    <h1>This is an about page</h1>

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
    </main>
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


