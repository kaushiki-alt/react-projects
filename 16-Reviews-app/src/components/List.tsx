import { Reviews } from "../Sandbox"

type ListProps = {
    reviews : Reviews[]
}
const List = ({reviews}:ListProps) => {
  return (
    <div className="mt-8">
            <h2 className='text-xl font-bold mb-4'>Reviews</h2>
            {reviews.length === 0 ? (
                <p>No reviews yet</p>
            ):
            (
                reviews.map((review, index) => {
                    const {email, rating, text} = review;
                    return(
                    <article key={index}>
                        <div className="font-bold">{email}</div>
                        <div className="text-yellow-500">
                            {'⭐'.repeat(Number(rating))}
                        </div>
                        <p className="mt-2">
                            {text}
                        </p>
                    </article>
                    )
                })
            )}
    </div>
  )
}

export default List
