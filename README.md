# vue-todo

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```


## Plan

Create a todo list application where the user can:

- Create a Todo with a completion date
- Delete a Todo
- Edit a todo's text
- Edit a todo's date
- The todos should be ordered by date in ascending order
- There should be a login screen which persists the users name across the app
- There should be consideration for all states, empty, loading, error.
- These should be styled using my own styles or a design system like tailwind or vuetify
- Use these as test cases for unit testing and e2e testing with Cypress & Jest


1. Create component structure needed 
    Header
    Main Layout
       - Todo
           - TodoForm
              - TodoInput
           - TodoList
              - TodoListItem
              - TodoControls
    Login
        - Login Form
    Footer
2. Create routes for the Login and Todo views. (Vue Router)
3. Create static styles for all content - add Vuetify to project.
4. Create tests using the above scenarios TDD style - Jest/Vue Testing?
5. Create functionality to make those tests pass
    - Create a todo (Form, pass data to an array of objects, have the TodoList render those out as TodoListItems)
    - What validation to consider?
    - Use Date-fns and a datepicker plugin. (Vuetify has a datepicker)
    - Edit a todo (Edge cases?)
    - Delete a todo 
    - Show empty slate state if there is nothing to do
6. Persist username from form (Vuex?)
7. Add e2e testing
