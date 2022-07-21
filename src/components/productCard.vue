<script setup lang="ts">
import { defineProps, defineEmits, ref } from "vue";
import type { productType } from "@/types/product";

const props = defineProps<{
  product: productType;
}>();

const emit = defineEmits<{
  (e: "addToCard", order: { product: productType; amount: number }): void;
}>();

const productAmount = ref<number>(0);

function addToCard(): void {
  if (productAmount.value != 0) {
    const product = props.product;
    const amount = productAmount.value;
    productAmount.value = 0;
    emit("addToCard", { product, amount });
  }
}

function plusAmount(): void {
  if (productAmount.value < props.product.stock) {
    productAmount.value++;
  }
}
function sourAmount(): void {
  if (productAmount.value > 0) {
    productAmount.value--;
  }
}
</script>
<template>
  <div class="w-[250px] shadow-2xl rounded-xl p-5 mb-5">
    <img :src="product.imageUrl" class="" alt="" />
    <div class="text-center space-y-4">
      <div>
        <div>{{ product.name }}</div>
        <div>{{product.price}} TL</div>
        <div>Stock <span class="font-bold">{{product.stock}}</span></div>
      </div>
      <div class="flex justify-around items-center">
        <button @click="sourAmount" class="changeCountBtn">-</button>
        <input
          class="w-10 rounded-md border-2 border-gray-700"
          type="number"
          :maxlength="product.stock"
          :value="productAmount"
          readonly
        />
        <button @click="plusAmount" class="changeCountBtn">+</button>
      </div>
      <button
        @click="addToCard"
        class="bg-green-500 text-white rounded-lg px-4 py-2"
      >
        Add To Card
      </button>
    </div>
  </div>
</template>

<style scoped>
.changeCountBtn {
  @apply w-6 h-6 rounded-lg bg-gray-400 flex justify-center items-center font-bold;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
}
input {
  @apply px-1;
}
</style>
