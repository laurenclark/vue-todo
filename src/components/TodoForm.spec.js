import TodoForm from "@/TodoForm.vue";

describe("is the TodoForm Component", () => {
    it("exports a valid component", () => {
        expect(TodoForm).toBeAComponent();
    });
});

describe("Blank slate of the form", () => {
    it("Has a text input", () => {});
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
