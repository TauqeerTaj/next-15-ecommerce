import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
// import userEvent from "@testing-library/user-event";
import LoginForm from "@/components/forms/LoginForm";

describe("LoginForm - Unit Tests", () => {
  beforeEach(() => {
    render(<LoginForm />);
  });

  test("renders form with email and password inputs", () => {
    expect(screen.getByLabelText(/Email or Phone Number/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Password/i)).toBeInTheDocument();
  });

  //   test("updates email and password on input change", () => {
  //     const emailInput = screen.getByLabelText(/Email or Phone Number/i);
  //     const passwordInput = screen.getByLabelText(/Password/i);

  //     userEvent.type(emailInput, "test@example.com");
  //     userEvent.type(passwordInput, "password123");

  //     expect(emailInput).toHaveValue("test@example.com");
  //     expect(passwordInput).toHaveValue("password123");
  //   });

  //   test("submit button is disabled when email or password is empty", () => {
  //     const submitButton = screen.getByRole("button", { name: /Log In/i });

  //     expect(submitButton).toBeDisabled();

  //     userEvent.type(
  //       screen.getByLabelText(/Email or Phone Number/i),
  //       "test@example.com"
  //     );
  //     expect(submitButton).toBeDisabled();

  //     userEvent.type(screen.getByLabelText(/Password/i), "password123");
  //     expect(submitButton).toBeEnabled();
  //   });
});
