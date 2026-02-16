import { render, screen } from "@testing-library/react";
import { Reviews } from "../Sandbox";
import List from "../components/List";

const mockReviews: Reviews[] = [
  {
    email: 'test@example.com',
    rating: '4',
    text: 'Great product!',
  },
  {
    email: 'user@example.com',
    rating: '5',
    text: 'Excellent service',
  },
];

describe('Testing List Component', () => { 
    test('should render heading', () => { 
        render(<List reviews={mockReviews}/>)
        expect(screen.getByRole('heading' , {level: 2, name: /reviews/i})).toBeInTheDocument();
     });

     test('should display the msg if the reviews array is empty', () => { 
        render(<List reviews={[]}/>);
        expect(screen.getByText(/no reviews yet/i)).toBeInTheDocument()
      })

      test('should render reviews correctly when provided', () => { 
        render(<List reviews={mockReviews}/>)

        const articles = screen.getAllByRole('article');

        expect(articles).toHaveLength(mockReviews.length);

        articles.forEach((article, index) => {
            const review = mockReviews[index];

            expect(article).toHaveTextContent(review.email)

            expect(article).toHaveTextContent(review.text)

             const stars = '⭐'.repeat(Number(review.rating));

            expect(article).toHaveTextContent(stars)
        })
       })
 })