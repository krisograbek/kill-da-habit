import { render } from "@testing-library/react-native";
import Habit from "./Habit";

describe("Habit Component", () => {
  it("Renders properly", () => {
    const { getByTestId, getByText } = render(<Habit name="Hello" />);
    // const text = screen.getByTestId("text");
    expect(getByText("Hi")).not.toBeNull();
    expect(getByTestId("text")).toBe("Hello");
  })
})
