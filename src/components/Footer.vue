<template>
  <div class="footer">
    <footer>
      <div class="container">
        <div class="contact-footer">
          <h2>Contact Info</h2>
          <h3>We would love to hear from you!</h3>
          <h3>Send us a message and we’ll get right back in touch.</h3>
          <div class="contact-info">
            <p>Email: email@email.com</p>
            <p>Phone: (555) - 555 - 5555</p>
          </div>
          <div class="socials">
            <md-button class="md-icon-button">
              <md-icon class="icon"><i class="fab fa-facebook"></i></md-icon>
            </md-button>
            <md-button class="md-icon-button">
              <md-icon class="icon"><i class="fab fa-linkedin"></i></md-icon>
            </md-button>
            <md-button class="md-icon-button">
              <md-icon class="icon"><i class="fas fa-envelope"></i></md-icon>
            </md-button>
          </div>
        </div>
        <div class="greeting">
          <h2>Lets Find A Solution</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto dolor blanditiis hic voluptate veniam. Quibusdam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam sapiente quam dicta temporibus expedita sit!</p>
        </div>
      </div>
      <div class="bottom-footer">
        <p class="txt-center">P & H Real Estate Solutions, LLC &copy; All Rights Reserved 2019</p>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style lang="scss" scoped>
$primary-color: #C82027;
$accent-color: #051B3B;

footer {
  color: #fff;
}

.container {
  display: flex;
  justify-content: space-around;  
  padding: 40px;
  background: $accent-color;
  margin-bottom: 0px;
}

.bottom-footer {
  background: $primary-color;
  padding: 20px;

  & p {
    margin: 0px;
  }
}

form {
  width: 550px;
  display: flex;
  flex-direction: column;
}

.contact-footer {

  & h2 {
    font-size: 2rem;
  }

  & .socials {
    margin-left: -15px;

    & .icon {
      color: #fff;

      &:hover {
        color: $primary-color;
      }
    }
  }
}

.greeting {
  max-width: 400px;

  & h2 {
    font-size: 2rem;
  }

  & p {
    font-size: 1.2rem;
    line-height: 1.5;
  }
}

.fields {
  display: flex;
  justify-content: space-between;
}

.input {
  display: flex;
  flex-direction: column
}

input {
  width: 220px;
  padding: 10px;
  outline: $primary-color;
  border-radius: 3px;
  border: none;
}

textarea {
  border-radius: 3px;
  border: none;
  padding: 10px;
}

input, textarea {
  font-size: 1.2rem;
}

.title {
  & h2 {
    font-size: 2rem;
  }
}

@media only screen and (max-width: 775px) {
  .container {
    flex-direction: column;

    & .contact-footer {
      margin-bottom: 40px;
    }    
  }
}
</style>
