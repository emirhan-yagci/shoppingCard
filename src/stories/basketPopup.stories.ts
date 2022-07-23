import basketPopup from "/src/components/basketPopup.vue";
export default {
  title: "shoppingCard/Basket",
  component: basketPopup,
};


export const popupBasket = () => ({
  components: { basketPopup },
  template:
   '  <basket-popup></basket-popup> ',

});

