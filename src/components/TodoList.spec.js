import TodoList from "@/TodoList.vue";

describe("is the TodoList Component", () => {
    it("exports a valid component", () => {
        expect(TodoList).toBeAComponent();
    });
});
