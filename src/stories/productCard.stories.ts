import productCard from "/src/components/productCard.vue";
export default {
  title: "shoppingCard/Card",
  component: productCard,
};


export const productcard = () => ({
  components: { productCard },
  template:
    `<product-card></product-card>`,

});

