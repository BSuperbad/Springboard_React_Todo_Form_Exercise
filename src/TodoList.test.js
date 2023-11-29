import React from "react";
import { render, fireEvent } from "@testing-library/react";
import TodoList from "./TodoList";

it("renders TodoList without crashing", function () {
    render(<TodoList />);
});

it("matches TodoList snapshot", function() {
    const { asFragment } = render(<TodoList />);
    expect(asFragment()).toMatchSnapshot();
});

it("should add new todo", function(){
    const {queryByPlaceholderText, queryByText} = render(<TodoList />);
    const input = queryByPlaceholderText("Enter a Task");
    const btn = queryByText("Add Task to Todo List");
    expect(queryByText('Vacuum')).not.toBeInTheDocument();
    fireEvent.change(input, {target: {value: "Vacuum"}});
    fireEvent.click(btn);
    expect(queryByText('Vacuum')).toBeInTheDocument();
});