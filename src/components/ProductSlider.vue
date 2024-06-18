<template>
  <swiper :navigation="true" :loop="true" :modules="modules" class="mySwiper">
    <swiper-slide>
      <img src="/images/image-product-1.jpg" alt="product image" />
    </swiper-slide>
    <swiper-slide>
      <img src="/images/image-product-2.jpg" alt="product image" />
    </swiper-slide>
    <swiper-slide>
      <img src="/images/image-product-3.jpg" alt="product image" />
    </swiper-slide>
    <swiper-slide>
      <img src="/images/image-product-4.jpg" alt="product image" />
    </swiper-slide>
  </swiper>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Navigation],
    };
  },
};
</script>

<style scoped>
.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;

  /* Center slide text vertically */
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.swiper-button-next {
  display: none;
  color: white;
  border: 1px solid red;
}
</style>
