import { mount } from "@vue/test-utils";
import ToDoform from "../../src/components/ToDoform";

describe("ToDoform", () => {
  const wrapper = mount(ToDoform);

  it("renders the current markup", () => {
    expect(wrapper.html()).toContain(
      '<label for="new-todo-input"> What needs to be done? </label>'
    );
  });
});
