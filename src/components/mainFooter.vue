<template>
  <footer>
    <!-- Grid container -->
    <div class="container">
      <!-- Section: Social media -->
      <section>
        <!-- Facebook -->
        <a
          class="btn"
          style="background-color: #3b5998"
          href="#!"
          role="button"
        >
          <font-awesome-icon class="icon" :icon="['fab', 'facebook']" />
        </a>

        <!-- Twitter -->
        <a
          class="btn"
          style="background-color: #55acee"
          href="#!"
          role="button"
        >
          <font-awesome-icon class="icon" :icon="['fab', 'twitter']" />
        </a>

        <!-- Google -->
        <a
          class="btn"
          style="background-color: #dd4b39"
          href="#!"
          role="button"
        >
          <font-awesome-icon class="icon" :icon="['fab', 'google']" />
        </a>

        <!-- Instagram -->
        <a
          class="btn"
          style="background-color: #ac2bac"
          href="#!"
          role="button"
        >
          <font-awesome-icon class="icon" :icon="['fab', 'instagram']" />
        </a>

        <!-- Linkedin -->
        <a
          class="btn"
          style="background-color: #0082ca"
          href="#!"
          role="button"
        >
          <font-awesome-icon class="icon" :icon="['fab', 'linkedin']" />
        </a>

        <!-- Github -->
        <a
          class="btn"
          style="background-color: #333333"
          href="#!"
          role="button"
        >
          <font-awesome-icon class="icon" :icon="['fab', 'github']" />
        </a>
      </section>
      <!-- Section: Social media -->
    </div>
    <!-- Grid container -->

    <!-- Copyright -->
    <div class="copyright">© 2020 Copyright: Khalil Alsous</div>
    <!-- Copyright -->
  </footer>
</template>

<style lang="scss" scoped>
footer {
  margin-top: 60px;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  background-color: #eee;
  .container {
    padding: 1.5rem !important;
    section {
      .icon {
        color: #fff;
      }
      .btn {
        border: none;
        transition: 0.2s;
        margin: 0.25rem !important;
        display: inline-block;
        font-weight: 400;
        line-height: 1.5;
        text-align: center;
        text-decoration: none;
        vertical-align: middle;
        padding: 0.375rem 0.75rem;
        font-size: 1rem;
        border-radius: 0.25rem;
        &:hover {
          opacity: 0.6;
        }
      }
    }
  }
  .copyright {
    background-color: #999;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    padding: 1rem !important;
    color: #fff;
  }
}
</style>