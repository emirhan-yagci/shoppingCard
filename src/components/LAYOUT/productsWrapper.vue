<script setup lang="ts">
import BaseContainer from "../baseContainer.vue";
import productCard from "../productCard.vue";

import { useProductStore } from "../../stores/product";

const useProduct = useProductStore();
const devices = useProduct.devices;

function addCard(orderData) {
  useProduct.addToBasket(orderData.product.id, orderData.amount);
}
</script>

<template>
  <base-container class="mt-10">
    <div class="flex flex-wrap justify-around">
      <product-card
        @addToCard="addCard"
        v-for="device in devices"
        :key="device.id"
        :product="device"
      
      ></product-card>
    </div>
  </base-container>
</template>

<style scoped></style>
