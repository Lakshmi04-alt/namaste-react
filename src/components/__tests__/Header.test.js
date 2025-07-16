import {fireEvent, render,screen} from "@testing-library/react";
import Header from "../Header";
import appStore from "../../../utils/appStore";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom"

it("should render Header component with a login button",()=>{
    render(
        <BrowserRouter>
      <Provider store={appStore}>
    <Header/>
    </Provider>
    </BrowserRouter>
    );

    const loginButton=screen.getByRole("button",{name:"Login"});
   //const loginButton=screen.getByText("Login");

   expect(loginButton).toBeInTheDocument();
});

it("should render Header component with a login button",()=>{
    render(
        <BrowserRouter>
      <Provider store={appStore}>
    <Header/>
    </Provider>
    </BrowserRouter>
    );

    const cartItems=screen.getByText(/Cart/);
   //const loginButton=screen.getByText("Login");

   expect(cartItems).toBeInTheDocument();
});

it("should change login to logout button",()=>{
    render(
        <BrowserRouter>
      <Provider store={appStore}>
    <Header/>
    </Provider>
    </BrowserRouter>
    );

    
   const loginButton=screen.getByRole("button",{name:"Login"});

   fireEvent.click(loginButton);

   const logoutButton=screen.getByRole("button",{name:"Logout"});

   expect(logoutButton).toBeInTheDocument();

   fireEvent.click(logoutButton);

    expect(loginButton).toBeInTheDocument();

});