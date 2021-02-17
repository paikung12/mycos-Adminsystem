import { render } from '@testing-library/react'
import CheckIn from './Homepage'

describe("CheckIn Page", () => {
    it("render correctly", () => {
        const {getByText} = render(<CheckIn />)

        expect(getByText("Ma Kub")).toBeTruthy()
    })
})