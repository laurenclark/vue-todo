import TodoForm from "@/TodoForm.vue";
import { mount } from "@vue/test-utils";

describe("is the TodoForm Component", () => {
    it("exports a valid component", () => {
        expect(TodoForm).toBeAComponent();
    });
});

describe("Blank slate of the form", () => {
    const wrapper = mount(MessageComponent);
    const button = wrapper.find("button");
    const textInput = wrapper.find("input[text]");
    const dateInput = wrapper.find("input[date]");
    it("Has a text input", () => {
        const expected = textInput.toBe(true);
        const actual = true;
        expect(actual).toBe(expected);
    });
    it("Has placeholder text in the text input", () => {
        const expected = "Wash dishes";
        const actual = "";
        expect(actual).toBe(expected);
    });
    it("Has a date picker input", () => {});
    it("Has a button labelled 'submit'", () => {});
});

describe("Creates a Todo Object", () => {
    expect(true).toBe(false);
});
