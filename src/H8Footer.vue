<template>
  <div class="footer"></div>
</template>

<script>
export default {}
</script>

<style scoped>
.header {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70px;
  border-bottom: 1px solid #ddd;
}
.content {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 320px;
  background-color: #ebebeb;
}
.footer {
  height: 50px;
  background-position-y: center;
  background-size: 160px auto;
  background-repeat-y: no-repeat;
  border-top: 1px solid #ddd;
  background-image: url(https://global-uploads.webflow.com/5f0d53c042a9ed6288de7f8d/5f6337ae2cfaa10946ceeb06_Hacktiv8%20logo%20horizontal%2001%20black-p-500.png);
  animation: imageMovement 2s linear infinite;
}

@keyframes imageMovement {
  from {
    background-position-x: 0; /* width of the image */
  }
  to {
    background-position-x: 160px; /* width of the image */
  }
}
</style>
