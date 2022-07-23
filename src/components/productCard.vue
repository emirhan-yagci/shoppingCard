<script setup lang="ts">
import { defineProps, defineEmits, ref } from "vue";
import type { productType } from "../types/product";
import { json } from "stream/consumers";

type Props = {
  product: productType;
};
const props = withDefaults(defineProps<Props>(), {
  product: () => {
    return {
      id: 0,
      name: "Huawei",
      price: 6500,
      imageUrl: "/device/huawei_telefon.png",
      stock: 14,
    };
  },
});


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
  <div class="w-[250px] shadow-2xl rounded-xl p-5 mb-5 deviceCards" :data-stock="product.stock">
    <img :src="product.imageUrl" alt="" />
    <div class="text-center space-y-4">
      <div>
        <div>{{ product.name }}</div>
        <div>{{ product.price }} TL</div>
        <div>
          Stock <span class="font-bold" id="deviceStock">{{ product.stock }}</span>
        </div>
      </div>
      <div class="flex justify-around items-center">
        <button @click="sourAmount" class="changeCountBtn" id="sourAmount">-</button>
        <input
          class="w-10 rounded-md border-2 border-gray-700"
          type="number"
          :maxlength="product.stock"
          :value="productAmount"
          readonly
        />
        <button @click="plusAmount" class="changeCountBtn plusAmount">+</button>
      </div>
      <button
        
        @click="addToCard"
        class="bg-green-500 text-white rounded-lg px-4 py-2 addToCardBtn"
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
