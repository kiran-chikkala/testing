import PopOveComponent from "../Popover/PopOverComponent";
export default {
  title: "Components/PopOver",
  component: PopOveComponent,
};
const Template = (args) => <PopOveComponent {...args} />;
export const PoperOver = Template.bind({});
PoperOver.args = {
  popoverContent: (
    <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia, laborum
      saepe. Aut, voluptatem commodi asperiores cumque corrupti, laborum,
      recusandae quasi tempore pariatur quos nihil quibusdam molestias error a
      architecto doloremque?
    </p>
  ),
};
