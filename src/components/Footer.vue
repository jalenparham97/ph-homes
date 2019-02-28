<template>
  <div class="footer">
    <footer>
      <div class="container">
        <div class="contact-footer">
          
        </div>
        <div class="greeting">
          <h2>Lets Find A Solution</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto dolor blanditiis hic voluptate veniam. Quibusdam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam sapiente quam dicta temporibus expedita sit!</p>
        </div>
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
  padding: 40px;
  background: $accent-color;
  color: #fff;
}

.container {
  display: flex;
  justify-content: space-around;  
}

.greeting {
  width: 400px;
}

form {
  width: 550px;
  display: flex;
  flex-direction: column;
}

.greeting {
  
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
</style>
