import TodoListItem from "@/TodoListItem.vue";

describe("is the TodoListItem component", () => {
    it("exports a valid component", () => {
        expect(TodoListItem).toBeAComponent();
    });
});
