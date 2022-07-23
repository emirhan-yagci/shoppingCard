<script setup lang="ts">
import { computed, ref } from "vue";
import basketPopup from "../basketPopup.vue";
import { useProductStore } from "../../stores/product.ts";
const useProduct = useProductStore();

const basketCount = computed<number>(() => {
  console.log(useProduct.getBasketCount);
  return useProduct.getBasketCount;
});

const popupOpen = ref<boolean>(false);

function toggleBasketPopup() {
  popupOpen.value = !popupOpen.value;
  const body = document.body;
  if (popupOpen.value == false) {
    body.style.overflow = "visible";
  } else {
    body.style.overflow = "hidden";
  }
}
</script>

<template>
  <section
    class="w-full text-white bg-[#222831] flex px-10 py-5 justify-between"
  >
    <basket-popup
      @closePopup="toggleBasketPopup"
      v-if="popupOpen"
    ></basket-popup>
    <div class="text-3xl">Vue + Typescript</div>
    <div
      @click="toggleBasketPopup"
      id="basketIcon"
      class="cursor-pointer relative"
    >
      <img src="../../assets/basket.png" alt="" class="w-[30px]" />
      <!--basket count -->
      <div
        class="absolute -top-1 -right-2 px-2 text-xs rounded-full bg-orange-500 t"
      >
        {{ basketCount }}
      </div>
    </div>
  </section>
</template>

<style scoped></style>
