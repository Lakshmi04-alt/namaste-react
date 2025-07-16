import {render,screen} from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("Contact us page Test cases",()=>{
it("should load contact us component",()=>{
  render(<Contact/>);

 const heading=screen.getByRole("heading");

// Assertion
 expect(heading).toBeInTheDocument();
});

it("should load button inside contact component",()=>{
  render(<Contact/>);

 const button=screen.getByText("Submit");

// Assertion
 expect(button).toBeInTheDocument();
});

it("should load input name inside contact component",()=>{
  render(<Contact/>);

 const input=screen.getByPlaceholderText("name");

// Assertion
 expect(input).toBeInTheDocument();
});

it("should load 2 input boxes inside contact component",()=>{
  render(<Contact/>);

 const inputBoxes=screen.getAllByRole("textbox");
 //console.log(inputBoxes.length);

// Assertion
 expect(inputBoxes.length).toBe(2);
});
});





