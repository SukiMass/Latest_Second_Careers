import { fireEvent, render, screen } from "@testing-library/react"
import RoleSelectionLayout from "../RoleSelectionLayout"

test('Role Select Page visible test', () => {
    render(<RoleSelectionLayout />)

    expect(screen.getByTestId('professionalTestId')).toBeInTheDocument()
    expect(screen.getByTestId('employerTestId')).toBeInTheDocument()
    expect(screen.getByTestId('partnerTestId')).toBeInTheDocument()
    expect(screen.getByTestId('cardSignupButton')).toBeInTheDocument()
})

test('Role Select Page Sign up Click test', () => {
    render(<RoleSelectionLayout />)
    const Signup = screen.getByTestId('cardSignupButton')

    const handleSignupClickMock = jest.fn();

    Signup.onclick = handleSignupClickMock

    fireEvent.click(Signup)

    expect(handleSignupClickMock).toHaveBeenCalledTimes(1);
})