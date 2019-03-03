<template>
  <div class="about">
    <header>
      <div class="cover bg-left bg-center-l bg-image">
        <div class="bg-black-40 pb5 pb6-m pb7-l">
          <Navbar/>
          <div class="tc mt4 mt5-m mt6-l ph3 header">
            <h1 class="f2 f1-l white-90 mb0 lh-title">Why P&H Real Estate Solutions, LLC?</h1>
            <h2 class="f3 white-90 mt3 mb4 lh-copy">Improving Our Community One Property At A Time</h2>
            <div class="action-btns mt3">
              <md-button class="md-raised md-primary" @click="$router.push('/contact')">Contact Us Today</md-button>
            </div>
          </div>
        </div>
      </div> 
    </header>

    <main>
      <div class="why pa3 pa5-ns">
        <div class=" mw6-ns center pt1 logo-container">
          <div class="aspect-ratio aspect-ratio--16x9">
            <img src="../assets/img/ph-logo.png" alt="" class="logo aspect-ratio--object">
          </div>
        </div>
        <p class="f4-ns f5 tc">We are a real estate solutions company located in Saginaw, MI. We specialize in buying and selling homes, and we’re experts at finding solutions for people who are in the market to buy or sell their own home or investment property. Our diverse team has experience with all types of buying and selling scenarios, and we understand how to make every transaction simple and stress free. We own and sell our homes, and are confident that we have something to meet the needs of every buyer. We are also well versed in most types of home sales and are certain that we can find a win-win solution for every seller, whether it be a traditional or creative selling solution.</p>
      </div>

      <div class="why-2 pa3">
        <div class="md-layout md-gutter md-alignment-center why-2-container">
          <div class="md-layout-item md-medium-size-47 md-small-size-80 md-xsmall-size-100">
            <md-card md-with-hover class="card">
              <md-ripple>
                <md-card-header>
                  <div class="tc">
                    <img src="../assets/img/teamwork.svg" class="br-100 h4 w4 dib pa2" title="Photo of a kitty staring at you">
                  </div>
                </md-card-header>

                <md-card-content>
                  <div class="tc">
                    <h1 class="f3 mb2 title">Our Team</h1>
                    <h2 class="f5 fw4 gray mt0 f4 measure">With a wealth of experience under our belts (buying and selling homes), our team and network of real estate experts have handled some of the most complicated real estate transactions on the market today. Whether you're looking to sell your existing home or investment property or are looking to buy your forever home or a new investment, our goal is to find a solution that works for both of us. We approach every transaction with the utmost professionalism and care.</h2>
                  </div>
                </md-card-content>

                <md-card-actions class="action-btn">
                  <md-button class="md-raised md-primary">Sell Your Home</md-button>
                </md-card-actions>
              </md-ripple>
            </md-card>
          </div>

          <div class="md-layout-item md-medium-size-47 md-small-size-75 md-xsmall-size-100">
            <md-card md-with-hover class="card card2">
              <md-ripple>
                <md-card-header>
                  <div class="tc">
                    <img src="../assets/img/computer.svg" class="br-100 h4 w4 dib pa2" title="Photo of a kitty staring at you">
                  </div>
                </md-card-header>

                <md-card-content>
                  <div class="tc">
                    <h1 class="f3 mb2 title">What Makes Us Different</h1>
                    <h2 class="f5 fw4 gray mt0 f4 measure">We embrace technology because it can streamline and automate our real estate transactions. We use a state-of-the-art business management system, keeping our business extremely organized and efficient so that we're able to spend less time shuffling paperwork and more time finding solutions that work for both of us.</h2>
                  </div>
                </md-card-content>

                <md-card-actions class="actions">
                  <md-button class="md-raised md-primary">Buy From Us</md-button>
                </md-card-actions>
              </md-ripple>
            </md-card>
          </div>
        </div>
      </div>
    </main>

    <Footer />
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

.bg-image {
  background: url('../assets/img/tech-2.jpg');
}

.why {

  & p {
    margin: -50px auto auto auto;
    color: $accent-color;
    max-width: 800px;
    line-height: 1.5;
  }
}

.why-2 {
  margin-bottom: 70px;

  & .why-2-container {
    margin: 0 auto;
  }

  & .card {
    max-width: 600px;
    margin: 20px auto;
    // min-height: 500px;
  }

  & .card2 {
    min-height: 441.334px;
  }

  & .title {
    color: $primary-color;
  }

  & h2 {
    color: $accent-color;
    margin: 0 auto;
    line-height: 1.5;
  }

  & .actions,  {
    margin-top: 44px;

    & button {
      margin: 0 auto;
    }
  }

  & .action-btn {
    & button {
      margin: 0 auto;
    }
  }
}

@media only screen and (max-width: 746px) {
  p {
    line-height: 2;
  }

  .card h2 {
    line-height: 2;
  }
}
</style>
