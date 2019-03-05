<template>
  <div class="contact">
    <header>
      <div class="cover bg-left bg-center-l bg-image">
        <div class="bg-black-30 pb5 pb6-m pb7-l">
          <Navbar/>
          <div class="tc mt4 mt5-m mt6-l ph3 header">
            <h1 class="f2 f1-l white-90 mb0 lh-title">Contact Us Today</h1>
            <h2 class="f3 white-90 mt3 mb4 lh-copy">We Would Love To Hear From You</h2>
            <div class="action-btns mt3">
              <md-button class="md-raised md-accent" @click="$router.push('/about')">Learn More</md-button>
            </div>
          </div>
        </div>
      </div> 
    </header>

    <!-- Main Contact Page -->
    <div class="contact-container">
      <div class="contact-form">
        <form>
          <h2 class="">Contact</h2>

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
      <div class="contact-info">
        <div class="info">
          <h2>Contact Info</h2>
          <h4>Address</h4>
          <p>4685 Hess Rd. Saginaw MI 48601</p>
          <h4>Phone</h4>
          <p>(989) 702-2000</p>
          <h4>Email</h4>
          <p>admin@phrealestatesolutions.com</p>
          <h4>Follow Us</h4>
          <div class="socials">
            <md-button class="md-icon-button">
              <md-icon class="icon"><i class="fab fa-facebook"></i></md-icon>
            </md-button>
            <md-button class="md-icon-button">
              <md-icon class="icon"><i class="fab fa-linkedin"></i></md-icon>
            </md-button>
          </div>
        </div>
      </div>
    </div>

    <!-- Footer -->
    <Footer/>
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue"

export default {
  name: 'Contact',
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
  background: url("../assets/img/contact.jpg");
}

// Main Contact Page Styles
.contact-container {
  display: flex;
  justify-content: space-around;
  margin: 50px auto;
  & .contact-form {
    margin: 0 auto;

    & h2 {
      font-size: 2rem;
      color: $accent-color;
    }

    & button {
      margin-left: -1px;
    }
  }

  & .contact-info {
    margin: 0 auto;

    & h2 {
      font-size: 2rem;
      color: $accent-color;
    }

    & h4 {
      color: $primary-color;
    }

    & .socials {

      & .icon {
        color: $accent-color;
      }
    }
  }
}

// Main Contact Page Media Queries
@media only screen and (min-width: 1275px) {
  .bg-image {
    background: url("../assets/img/phone.jpg");
  }

  .contact-container {
    width: 1270px;
    & .contact-form {
      width: 700px;
    }
  }
}

@media only screen and (max-width: 1275px) {
  .contact-container {
    
    & .contact-form {
      width: 500px;
    }


  }
}


@media only screen and (max-width: 830px) {
  .contact-container {

    & .contact-form {
      width: 350px;
    }
  }
}

@media only screen and (min-width: 700px) {
  .contact-container {

    & .contact-info {
      & .socials {
        margin-left: -15px;
      }
    }
  }
}

@media only screen and (max-width: 700px) {
  .contact-container {
    flex-direction: column;
    & .contact-form {
      width: 90%;
      margin: 0 auto;

      & h2 {
        text-align: center;
      }

      & button {
        width: 100%;
        margin: 0 auto;
      }
    }

    & .contact-info {
      text-align: center;
      margin-top: 50px;
    }
  }
}
</style>


