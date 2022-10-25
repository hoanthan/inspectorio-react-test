import { render, screen } from "@testing-library/react";
import HomePage from ".";
import { TOP_FIVE } from "../../consts/users";
import { useAppContext } from "../../contexts/AppProvider";
import TestApp from "../../test-utils/TestApp";

jest.mock("../../contexts/AppProvider", () => {
    const actual = jest.requireActual('../../contexts/AppProvider.tsx')

    return {
        ...actual,
        useAppContext: jest.fn()
    }
})

const renderComponent = () => render(
    <HomePage />,
    {
        wrapper: TestApp
    }
)

const mockRegisterPageTitle = jest.fn()

describe(HomePage.name, () => {
    beforeEach(() => {
        (useAppContext as jest.Mock).mockReturnValue({
            registerPageTitle: mockRegisterPageTitle
        })
    })

    it("should register page title as 'Home'", () => {
        renderComponent()
        expect(mockRegisterPageTitle).toBeCalledWith("Home")
    })

    it("should render top 5 users", () => {
        renderComponent()

        TOP_FIVE.forEach(username => {
            const userButton = screen.getByTestId(`HomePage__username-${username}`)
            expect(userButton).toBeInTheDocument()
        })
    })
})