import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from 'react-router-dom'
import { act } from 'react-dom/test-utils';
import '@testing-library/jest-dom'
import React from 'react';
import App from "../../../App";

describe("Social Links tests", () => {

  //global router
  const renderWithRouter = (ui, { route = '/' } = {}) => {
    window.history.pushState({}, 'Test page', route)

    return {
      user: userEvent,
      ...render(ui, { wrapper: BrowserRouter }),
    }
  }

  test("clicking google link", async() => {
    renderWithRouter(<App />);
    expect(screen.getByText(/Sign In to Second Careers/i)).toBeInTheDocument();
    act(() => {
      fireEvent.click(screen.getByTestId("signup-link"));
    });
    await waitFor(() =>
      expect(window.location.href).toBe("http://localhost/signUp")
    );
  })

})