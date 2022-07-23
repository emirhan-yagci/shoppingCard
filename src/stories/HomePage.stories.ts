import HomePage from "/src/views/HomePage.vue";
export default {
  title: "shoppingCard",
  component: HomePage,
};


export const Home = () => ({
  components: { HomePage },
  template:
    `<home-page></home-page>`,

});

