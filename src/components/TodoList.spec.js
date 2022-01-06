import TodoList from "./TodoList.vue";
import { mount } from "@vue/test-utils";

describe("The right component is rendering", () => {
    it("Exports a valid component", () => {
        expect(TodoList).toBeAComponent();
    });
    it("Renders correctly", () => {
        const wrapper = mount(TodoList);
        expect(wrapper.element).toMatchSnapshot();
    });
});
