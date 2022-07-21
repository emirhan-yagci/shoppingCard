import { defineStore } from "pinia";

import type { productType, BasketProduct } from "@/types/product";
import device from "@/data/device.json";
export const useProductStore = defineStore("useProductStore", {
  state: () => {
    return {
      devices: device,
      userBasket: <BasketProduct>[],
    };
  },
  getters: {
    getBasketCount(): number {
      return this.userBasket.length;
    },
  },
  actions: {
    addToBasket(productId, amount) {
      for (const basketDevice of this.userBasket) {
        if (basketDevice.productDetails.id == productId) {
          basketDevice.amount += amount;
          console.log("same product");
          return;
        }
      }
      const deviceData = this.devices[productId];
      this.userBasket.push({ productDetails: deviceData, amount });
      console.log(this.userBasket);
    },
    buyBasket(){
      for(const basketItem of this.userBasket){
        const itemId = basketItem.productDetails.id;
        this.devices[itemId].stock -= basketItem.amount;
      }
      this.userBasket.length = 0;
    }
  },
});
