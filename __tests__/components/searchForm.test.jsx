import '@testing-library/jest-dom'
import { render, screen } from "@testing-library/react";
import SearchForm from '@/components/searchForm';

describe('SearchForm', () => {
  it("should render form", () => {
    render(<SearchForm/>);

    expect(screen.getByRole("textbox")).toHaveAttribute("name", "search");
    expect(screen.getByRole("button")).toHaveAttribute("type", "submit");
  });
});