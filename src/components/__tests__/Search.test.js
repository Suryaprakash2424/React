import { BrowserRouter } from "react-router-dom";
import MOCK_DATA from "../mocks/mockResListData.json";
import Body from "../Body";
import { act } from 'react-dom/test-utils';
import { fireEvent, render,screen } from "@testing-library/react";

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(MOCK_DATA);
        },
    });
});

it("Should render Body component with Search", async () => {
    await act(async () =>
        render(
            <BrowserRouter>
                <Body />
            </BrowserRouter>
        )
    )
    const searchBtn = screen.getByRole("button", { name: "search" });
    console.log(searchBtn);
    expect(searchBtn).toBeInTheDocument();
});

it("Should render Body component with Search input and how how many cards are there", async () => {
    await act(async () =>
        render(
            <BrowserRouter>
                <Body />
            </BrowserRouter>
        )
    );

    const searchBtn = screen.getByRole("button", { name: "search" });
    // console.log(searchBtn);
    const searchInput = screen.getByTestId("searchInput");

    fireEvent.change(searchInput, { target: { value: "burger" } });
    fireEvent.click(searchBtn);
    //Screen should display 4 cards
    const cards = screen.getAllByTestId("rescard");

    expect(cards.length).toBe(4);
});