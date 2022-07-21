<script setup lang="ts">
import { computed } from "vue";
import { useProductStore } from "@/stores/product";

const emit = defineEmits(["closePopup"])

const useProduct = useProductStore();

const userBasket = useProduct.userBasket;


const totalPrice = computed<number>(() => {
  let total = 0;
  for(const product of userBasket){
    total += product.productDetails.price * product.amount
  }
  return total;
});

function buyBasket(){
  useProduct.buyBasket()
  emit("closePopup")
  
}
</script>

<template>
  <section
    class="fixed left-0 top-0 w-full h-full flex justify-center z-10 items-center"
  >
    <div
      @click="$emit('closePopup')"
      class="absolute top-0 left-0 w-full h-full bg-slate-900/40"
    ></div>
    <div
      class="absolute w-[450px] max-h-[90%] shadow-2xl rounded-lg space-y-3 bg-white text-black p-5 overflow-y-scroll"
    >
      <h2 class="text-orange-400 font-semibold text-2xl">Your Shopping Cart</h2>
      <ul class="space-y-4">
        <li
          v-for="product in userBasket"
          :key="product.productDetails.id"
          class="flex items-center space-x-5 py-5 px-5 shadow-2xl relative"
        >
          <div>
            <img
              :src="product.productDetails.imageUrl"
              class="w-[130px]"
              alt=""
            />
          </div>
          <div class="flex flex-col items-start">
            <span
              class="bg-green-500 rounded-full w-10 h-10 p-3 flex items-center justify-center absolute -left-2 -top-2"
              >{{ product.amount }}X</span
            >
            <span class="font-bold">{{ product.productDetails.name }}</span>
            <span class="font-bold">{{ product.productDetails.price }}</span>
          </div>
        </li>
      </ul>
      <div class="border-b-2 border-gray-600"></div>
      <div class="space-y-2">
        <div class="text-center text-xl">{{totalPrice}} TL</div>
        <button @click="buyBasket" class="bg-slate-500 w-full roub text-xl text-white rounded-lg">
          Buy
        </button>
      </div>
    </div>
  </section>
</template>

<style></style>
