import Contact from "../Contact";
import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

test("should load contact us components", () => {
    render(<Contact />);
    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
});

test("should load button inside contact", () => {
    render(<Contact />);
    // Querying
    const button = screen.getByText("Submit");
    // Assertion
    expect(button).toBeInTheDocument();
});

test("should load input name inside contact", () => {
    render(<Contact />);
    const input = screen.getByPlaceholderText("Name");
    expect(input).toBeInTheDocument();
});

test("should load 2 input box inside contact", () => {
    render(<Contact />);
    const input = screen.getByPlaceholderText("Name");
    expect(input).toBeInTheDocument();
});

test("should load 2 input boxes inside contact", () => {
    render(<Contact />);
    const inputboxes = screen.getAllByRole("textbox");
    expect(inputboxes.length).toBe(2);
});







