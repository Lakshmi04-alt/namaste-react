import {fireEvent, render,screen} from "@testing-library/react";
import {act} from "react";
import Body from "../Body";
import MOCK_DATA from "../mocks/mockResListData.json";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

global.fetch=jest.fn(()=>{
     return Promise.resolve({
        json: ()=>{
            return Promise.resolve(MOCK_DATA);
        }
    })
});
 
it("should Search resList for family input ",async ()=>{
    await act(async () =>
         render(
          <BrowserRouter>
           <Body/>
          </BrowserRouter>
    ));

    // const cardsBeforeSearch= await screen.getAllByTestId("resCard");

    //  expect(cardsBeforeSearch.length).not.toBe(10);

    const searchBtn = screen.getByRole("button", {name:"Search"});

    const searchInput=screen.getByTestId("searchInput");
    
    fireEvent.change(searchInput, { target: {value:"family"}});

    fireEvent.click(searchBtn);

    // // screen should load res cards with family
    
    const cardsAfterSearch= await screen.getAllByTestId("resCard");

    expect(cardsAfterSearch.length).toBe(2);
});

// it("Should filter Top Rated Restaurant", async ()=>{
//   await act(async()=>
//     render(
//     <BrowserRouter>
//       <Body/>
//       </BrowserRouter>
//  )
// );

// const cardsBeforeFilter = screen.getAllByTestId("resCard");

// expect(cardsBeforeFilter.length).not.toBe(10);
// const topRatedBtn = screen.getByRole("button", { name: "Top Rated Restaurants"});
// fireEvent.click(topRatedBtn);
// const cardsAfterFilter = screen.getAllByTestId("resCard"); 
// expect(cardsAfterFilter.length).toBe(10);
// });

