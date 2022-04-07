import { render } from "@testing-library/react-native";
import { describe, expect, it } from "vitest";
import App from "../App";

describe("App", () => {
  it("should render and assert in vitest", () => {
    const { getByText } = render(<App />);

    expect(getByText("Hi from vitest"));
  });
});
