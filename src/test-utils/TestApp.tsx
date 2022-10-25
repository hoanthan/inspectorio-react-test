import { PropsWithChildren } from "react"
import { BrowserRouter } from "react-router-dom"

const TestApp: React.FC<PropsWithChildren> = ({ children }) => {
    return (
        <BrowserRouter>
            {children}
        </BrowserRouter>
    )
}

export default TestApp