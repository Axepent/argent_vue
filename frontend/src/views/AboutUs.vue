<template>
  <div>

    <main>
      <div class="container container-custom">
        <div class="row align-items-center g-5">
          <div class="col-lg-6">
            <h1 class="display-5 fw-bold">Purpose and Goals of this WEB-site</h1>
            <p class="lead">
              This WEB-site is created for educational purposes. Here we will learn new languages to communicate with
              alliance and other creatures.
              This topic is very important for our future as a mankind, so don't skip this opportunity!
            </p>
          </div>
          <div class="col-lg-6 d-flex justify-content-center">
            <img src="@/assets/images/logo.png" class="img-fluid custom-logo" alt="logo" width="200" />
          </div>
        </div>

        <div class="row align-items-center g-5 mt-5">
          <div class="col-lg-6">
            <img src="@/assets/images/FindTheTruth_1.jpg" class="img-fluid" alt="Another Image" width="450" />
          </div>
          <div class="col-lg-6">
            <p class="lead">
              You can easily recognize us by our Logo. That creature is called "Argent" and he got pretty interesting
              story, at least we think so. His story represents a good example of how we should use our strength and
              knowledge. Probably in some time we will tell you more about him. But for now it's a secret.
            </p>
          </div>
        </div>
      </div>
    </main>

  </div>
</template>

<script>
import HeaderComponent from "@/components/Header.vue";
import FooterComponent from "@/components/Footer.vue";

export default {
  name: "AboutUs",
  components: {
    HeaderComponent,
    FooterComponent,
  },
};
</script>

<style scoped>
@import "@/assets/css/main.css";
@import "@/assets/css/about.css";
</style>
