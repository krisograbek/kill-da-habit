import { fireEvent, render } from "@testing-library/react-native";
import HabitForm from "./HabitForm";

describe("Habit Form", () => {
  it("Renders properly", () => {
    const { getByTestId } = render(<HabitForm isVisible={true} />)
    const component = getByTestId("modal");
    expect(component).toBeTruthy();
  });

  it("Doesn't render when not visible", () => {
    const { queryByTestId } = render(<HabitForm isVisible={false} />)
    const component = queryByTestId("modal");
    expect(component.props.visible).toBe(false);
  });

  it("clears habit on close", () => {
    const { getByTestId } = render(<HabitForm isVisible={true} />)
    const button = getByTestId('closeButton');
    fireEvent.press(button);
  });
})
