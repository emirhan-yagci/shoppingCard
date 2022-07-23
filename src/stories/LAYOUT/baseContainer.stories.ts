import baseContainer from "/src/components/baseContainer.vue";
export default {
  title: "shoppingCard/LAYOUT",
  component: baseContainer,
};

export const baseContainer1 = () => ({
  components: { baseContainer },
  template: `<base-container isStories="true">
            <div class="text-white h-[500px]">BASE CONTAİNER</div>
    </base-container>`,
});
