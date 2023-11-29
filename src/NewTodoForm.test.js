import React from "react";
import { render, fireEvent } from "@testing-library/react";
import NewTodoForm from "./NewTodoForm";

it("renders New Todo Form without crashing", function () {
    render(<NewTodoForm />);
});

it("matches New Todo Form snapshot", function() {
    const { asFragment } = render(<NewTodoForm />);
    expect(asFragment()).toMatchSnapshot();
});

  it("should call addNewTodo function on form submission", () => {
    const addTodoMock = jest.fn();
    const { getByLabelText, getByText } = render(<NewTodoForm addNewTodo={addTodoMock} />);

    fireEvent.change(getByLabelText("Add New Todo:"), { target: { value: "Make Bed" } });

    fireEvent.click(getByText("Add Task to Todo List"));

    expect(addTodoMock).toHaveBeenCalledWith({ todo_text: "Make Bed" });
  });



