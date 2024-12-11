import React from "react";
import { render ,screen} from "@testing-library/react";
import ResturantCard from "../RestaurentCard";
import MOCK_DATA from "../mocks/resCardMock.json";
import "@testing-library/jest-dom";

it("should render RestaurantCard component with props Data", () => {
    render(<ResturantCard resData={MOCK_DATA} />);
    const name = screen.getByText("Kanti Sweets");
    expect(name).toBeInTheDocument();
});
