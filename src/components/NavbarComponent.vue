<template>
  <nav class="navbar">
    <a class="navbar-brand logo h-3rem" href="/home"></a>

    <div class="navbar-menu" :class="{ 'is-active': isActive }">
      <div class="navbar-start">
        <a class="navbar-item" href="/shop">Shop</a>
        <a class="navbar-item" href="/matches">Matches</a>
        <a class="navbar-item" href="/profile">Profile</a>
      </div>

      
    </div>
    <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
            <a class="button is-primary" href="/signup">
              <strong>Sign up</strong>
            </a>
            <a class="button is-light" href="/login">Log in</a>
          </div>
        </div>
      </div>

  </nav>
</template>

<script>
    export default {
    data() {
        return {
        isActive: false,
        };
    },
    methods: {
        toggleMenu() {
        this.isActive = !this.isActive;
        },
    },
    };
</script>

<style scoped>
.logo {
    background-size: contain;
    background-repeat: no-repeat;
    width: 50px;
}

.navbar {
    align-items: center;
    display: flex;
    justify-content: space-between;
    background-color: #f5f5f5;
    border-bottom: 1px solid #dbdbdb;
}

.navbar-brand {
  padding: 0 1rem;
}

.navbar-item {
  padding: 0.5rem 1rem;
}

.navbar-menu {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 1rem;
}


@media screen and (max-width: 1023px) {
  .navbar-menu {
    display: none;
  }

  .navbar-menu.is-active {
    display: flex;
  }

  .navbar-start {
    flex-direction: column;
  }

  .navbar-end {
    flex-direction: column;
  }

  .navbar-item {
    border-bottom: 1px solid #dbdbdb;
  }
}

.button {
  margin: 0 0.5rem;
}

.is-primary {
    padding: 0.5rem 1rem;
  background-color: #00d1b2;
  color: #fff;
}

.is-light {
    padding: 0.5rem 1rem;
  background-color: #f5f5f5;
  color: #333;
}

</style>