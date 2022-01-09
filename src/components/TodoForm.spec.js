import TodoForm from "./TodoForm.vue";
import { mount } from "@vue/test-utils";

describe("Is the TodoForm Component", () => {
    it("Exports a valid component", () => {
        expect(TodoForm).toBeAComponent();
    });
    it("Renders correctly", () => {
        const wrapper = mount(TodoForm);
        expect(wrapper.element).toMatchSnapshot();
    });
});

describe("Blank slate of the form", () => {
    const wrapper = mount(TodoForm);
    // Get/Find: Get is similar to find, but get throws instead of returning a ErrorWrapper.
    // As a rule of thumb, always use [get] except when you are asserting something doesn't exist.
    // In that case use [find].
    const textInput = wrapper.get("input[text]");
    it("Has a text input", () => {
        expect(wrapper).toMatchSnapshot();
        expect(textInput.exists()).toBe(true);
    });
    it("Has placeholder text in the text input", () => {
        const expected = "Wash dishes";
        expect(textInput.html()).toContain(expected);
    });
    // it("Has a date picker input", () => {
    //     expect(true).toBe(false);
    // });
    // it("Has a button labelled 'submit'", () => {
    //     expect(true).toBe(false);
    // });
});

// describe("Creates a Todo Object", () => {
//     expect(true).toBe(false);
// });
