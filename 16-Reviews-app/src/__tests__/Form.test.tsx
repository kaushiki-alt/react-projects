import { render, screen } from "@testing-library/react"
import Form from "../components/Form";
import userEvent from "@testing-library/user-event";

// helper function
export const getFormElements = () => {
    const emailInput = screen.getByRole('textbox', { name: /email/i });
    const ratingSelect = screen.getByRole('combobox', { name: /rating/i });
    const textArea = screen.getByRole('textbox', { name: /your review/i });
    const submitbtn = screen.getByRole('button', { name: /submit review/i });

    return {
        emailInput, ratingSelect, textArea, submitbtn
    }
}

describe('Testing Form Component', () => {
    const mockOnSubmit = vi.fn();

    beforeEach(() => {
        mockOnSubmit.mockClear();
    })

    test('should render all form elements correclty', () => {
        render(<Form onSubmit={mockOnSubmit} />);
        const { emailInput, ratingSelect, textArea, submitbtn } = getFormElements();

        expect(emailInput).toHaveValue('');
        expect(ratingSelect).toHaveValue('');
        expect(textArea).toHaveValue('');
        expect(submitbtn).toBeInTheDocument();
    })

    test('should show error if review is too short', async () => {
        const user = userEvent.setup();
        render(<Form onSubmit={mockOnSubmit} />);

        const { emailInput, ratingSelect, textArea, submitbtn } = getFormElements();

        await user.type(emailInput, 'test@test.com');
        await user.type(textArea, 'good');
        await user.selectOptions(ratingSelect, '4');
        await user.click(submitbtn);

        expect(screen.getByText(/review must be at least 10 characters long/i)).toBeInTheDocument();
        expect(mockOnSubmit).not.toHaveBeenCalled();
    })

    test('should submit the form with valid data', async () => {
        const user = userEvent.setup();
        render(<Form onSubmit={mockOnSubmit} />);

        const { emailInput, ratingSelect, textArea, submitbtn } = getFormElements();
        await user.type(emailInput, 'test@test.com');
        await user.type(textArea, 'its a valid review hence acceptable as its a long review ');
        await user.selectOptions(ratingSelect, '4');
        await user.click(submitbtn);

        expect(mockOnSubmit).toHaveBeenCalledWith(
            {
                email: 'test@test.com',
                rating: '4',
                text: 'its a valid review hence acceptable as its a long review '
            }
        )

        expect(emailInput).toHaveValue('');
        expect(ratingSelect).toHaveValue('');
        expect(textArea).toHaveValue('');
    })


})