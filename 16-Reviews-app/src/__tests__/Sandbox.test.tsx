import { render, screen } from "@testing-library/react"
import Sandbox from "../Sandbox"
import userEvent from "@testing-library/user-event";
import { getFormElements } from "./Form.test";

describe('Reviews App test', () => {
    test('renders Reviews App heading', () => {
        render(<Sandbox />);
        expect(screen.getByRole('heading', { level: 1, name: /reviews app/i }))
    })

    // test('should add new review on form submission', async () => {
    //     const user = userEvent.setup();
    //     render(<Sandbox />);

    //     const { emailInput, ratingSelect, textArea, submitbtn } = getFormElements();

    //     await user.type(emailInput, 'test@example.com');
    //     await user.selectOptions(ratingSelect, '4');
    //     await user.type(textArea, 'great work');
    //     await user.click(submitbtn);

    //     expect(screen.getByText('test@example.com')).toBeInTheDocument();
    //     expect(screen.getByText('⭐'.repeat(4))).toBeInTheDocument();
    //     expect(screen.getByText('great work')).toBeInTheDocument();
    // });

    test('should add new review on form submission', async () => {
                const user = userEvent.setup();
        render(<Sandbox />);

        const reviews =  screen.queryAllByRole('article');
        expect(reviews).toHaveLength(0);

        const { emailInput, ratingSelect, textArea, submitbtn } = getFormElements();

        await user.type(emailInput, 'test@example.com');
        await user.selectOptions(ratingSelect, '4');
        await user.type(textArea, 'great work');
        await user.click(submitbtn);

            expect(screen.getAllByRole('article')).toHaveLength(1);
    })

})