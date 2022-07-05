import { render } from "@testing-library/react-native";
import Habit from "./Habit";

describe("Habit Component", () => {
  it("Renders properly", () => {
    const { getByTestId } = render(<Habit name="Hello" />);
    expect(getByTestId("text").children).toContain("Hello");
    // expect(queryByText("Hello")).not.toBeNull();
  })
})
