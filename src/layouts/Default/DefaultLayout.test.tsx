import { render, screen } from "@testing-library/react";
import DefaultLayout from ".";
import { useAppContext } from "../../contexts/AppProvider";
import TestApp from "../../test-utils/TestApp";

jest.mock("../../contexts/AppProvider", () => {
    return {
        useAppContext: jest.fn()
    }
})

const renderComponent = () => render(
    <DefaultLayout />, {
        wrapper: TestApp
    }
)

describe(DefaultLayout.name, () => {
    beforeEach(() => {
        (useAppContext as jest.Mock).mockReturnValue({
            enableBackNavigation: false,
            pageTitle: ''
        })
    })
    it("should render page header", () => {
        renderComponent()
        const pageHeader = screen.getByTestId("PageHeader__root")
        expect(pageHeader).toBeInTheDocument()
    })

    it("should render back button when enableBackNavigation is true", () => {
        (useAppContext as jest.Mock).mockReturnValue({
            enableBackNavigation: true
        })

        renderComponent()

        expect(screen.getByTestId("PageHeader__backBtn")).toBeInTheDocument()
    })

    it("should not render back button when enableBackNavigation is false", () => {
        (useAppContext as jest.Mock).mockReturnValue({
            enableBackNavigation: false
        })

        renderComponent()

        expect(screen.queryByTestId("PageHeader__backBtn")).not.toBeInTheDocument()
    })

    it("should render page title as Home", () => {
        (useAppContext as jest.Mock).mockReturnValue({
            pageTitle: "Home"
        })

        renderComponent()

        const pageTitle = screen.getByTestId("PageHeader__title")

        expect(pageTitle.textContent).toBe("Home")
    })
})