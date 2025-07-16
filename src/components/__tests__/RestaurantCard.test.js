import RestaurantCard from "../RestaurantCard";
import {render,screen} from "@testing-library/react";
import MOCK_DATA from "../mocks/resCardMock.json";
import "@testing-library/jest-dom";


it("should render Restaurant card with props Data",()=>{
    render(<RestaurantCard resData={MOCK_DATA}/>);

    const name=screen.getByText("Sweet Heart Restaurant 2");

    expect(name).toBeInTheDocument();
});

// it("should render Restaurant card with promoted label",()=>{
//     render(<RestaurantCard resData={MOCK_DATA}/>);

//   const label=screen.getByText("Promoted");

//     expect(label).toBeInTheDocument();
//  });