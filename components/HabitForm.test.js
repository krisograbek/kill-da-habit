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

  it("renders name input", () => {
    const { getByTestId } = render(<HabitForm isVisible={true} />)
    const nameInput = getByTestId("name");
    expect(nameInput).toBeTruthy();
  });

  it("renders factor input", () => {
    const { getByTestId } = render(<HabitForm isVisible={true} />)
    const factorInput = getByTestId("factor");
    expect(factorInput).toBeTruthy();
  });

  describe("Form validations", () => {

    it("given name input provided, name error is not rendered", () => {
      const { queryByTestId, getByTestId } = render(<HabitForm isVisible={true} />);
      const nameInput = getByTestId("name");
      // doesn't render the error message
      expect(queryByTestId("nameError")).toBeFalsy();
      const submitButton = getByTestId("submitButton");
      // change name
      fireEvent.changeText(nameInput, "Some Name");
      // submit with the new name field
      fireEvent.press(submitButton);
      // no error
      expect(queryByTestId("nameError")).toBeFalsy();
    });

    it("given name input is empty, it displays field required", () => {
      const { queryByTestId, getByTestId, getByText } = render(<HabitForm isVisible={true} />);
      // doesn't render the error message
      expect(queryByTestId("nameError")).toBeFalsy();
      const submitButton = getByTestId("submitButton");
      // submit with empty name field
      fireEvent.press(submitButton);
      // displays error message
      expect(queryByTestId("nameError")).toBeTruthy();
      expect(getByText("Name field is required")).toBeTruthy();
    });

    it("given factor is bigger than 0.01, factor error is not rendered", () => {
      const { queryByTestId, getByTestId, getByText } = render(<HabitForm isVisible={true} />);
      const factorInput = getByTestId("factor");
      // doesn't render the error message
      expect(queryByTestId("factorError")).toBeFalsy();
      const submitButton = getByTestId("submitButton");
      fireEvent.changeText(factorInput, "1");
      // submit with the new factor field
      fireEvent.press(submitButton);
      // no error rendered
      expect(queryByTestId("factorError")).toBeFalsy();
    });

    it("given factor input is empty, it displays must be valid number", () => {
      const { queryByTestId, getByTestId, getByText } = render(<HabitForm isVisible={true} />);
      // doesn't render the error message
      expect(queryByTestId("factorError")).toBeFalsy();
      const submitButton = getByTestId("submitButton");
      // submit with empty factor field
      fireEvent.press(submitButton);
      // displays error message
      expect(queryByTestId("factorError")).toBeTruthy();
      expect(getByText("Factor must be a valid number")).toBeTruthy();
    });

    it("given factor input a negative or a very small number, it displays must be greater than 0.01", () => {
      const { queryByTestId, getByTestId, getByText } = render(<HabitForm isVisible={true} />);
      const factorInput = getByTestId("factor");
      // doesn't render the error message
      expect(queryByTestId("factorError")).toBeFalsy();
      const submitButton = getByTestId("submitButton");
      fireEvent.changeText(factorInput, "-21");
      // submit with a negative factor
      fireEvent.press(submitButton);
      // displays error message
      expect(queryByTestId("factorError")).toBeTruthy();
      expect(getByText("Factor must be greater than 0.01")).toBeTruthy();
      fireEvent.changeText(factorInput, "0.002");
      // submit with a very small factor
      fireEvent.press(submitButton);
      // displays error message
      expect(queryByTestId("factorError")).toBeTruthy();
      expect(getByText("Factor must be greater than 0.01")).toBeTruthy();
    });
  })
})
