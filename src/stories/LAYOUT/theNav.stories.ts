

import theNav from "/src/components/LAYOUT/theNav.vue";
export default {
  title: "shoppingCard/LAYOUT",
  component: theNav,
};


export const Navbar = () => ({
  components: { theNav },
  template:
   '  <the-nav></the-nav> ',

});

