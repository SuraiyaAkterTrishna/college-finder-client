import { useState } from 'react';
import useAxiosPublic from '../../hooks/useAxiosPublic';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const FeedbackForm = ({reviewer, image, college, uid}) => {
	const [rating, setRating] = useState(0);
	const [feedback, setFeedback] = useState('');
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate();

	const handleRatingChange = (newRating) => {
		setRating(newRating);
	};

	const handleSubmit = async () => {
		// Handle the feedback submission logic here
		console.log('Rating:', rating);
		console.log('feedback:', feedback);

        const reviewInfo = {college, reviewer, image, rating, feedback, uid};
        const reviewRes = await axiosPublic.post("/reviews", reviewInfo);
        if (reviewRes.data.insertedId) {
            //show success popup
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: `review successfully added`,
              showConfirmButton: false,
              timer: 1500,
            });
            navigate(`/`);
          }


		// Reset form
		setRating(0);
		setFeedback('');
	};

	return (
		<div className="flex flex-col max-w-xl p-8 shadow-sm rounded-xl lg:p-12 bg-gray-50 text-gray-800">
			<div className="flex flex-col items-center w-full">
				<h2 className="text-3xl font-semibold text-center capitalize">Your opinion matters!</h2>
				<div className="flex flex-col items-center py-6 space-y-3">
					<span className="text-center">How was your experience?</span>
					<div className="flex space-x-3">
						{[1, 2, 3, 4, 5].map((star) => (
							<button
								key={star}
								type="button"
								title={`Rate ${star} stars`}
								aria-label={`Rate ${star} stars`}
								onClick={() => handleRatingChange(star)}
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 20 20"
									fill={rating >= star ? 'currentColor' : 'gray'}
									className={`w-10 h-10 ${rating >= star ? 'text-yellow-500' : 'text-gray-400'}`}
								>
									<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
								</svg>
							</button>
						))}
					</div>
				</div>
				<div className="flex flex-col w-full">
					<textarea
						rows="3"
						placeholder="type here..."
						className="p-4 rounded-md resize-none text-gray-800 bg-gray-50 border border-gray-300"
						value={feedback}
						onChange={(e) => setFeedback(e.target.value)}
					></textarea>
					<button
						type="button"
						className="py-4 my-8 font-semibold rounded-md text-gray-50 bg-violet-600 hover:bg-violet-700"
						onClick={handleSubmit}
					>
						Leave feedback
					</button>
				</div>
			</div>
		</div>
	);
};

export default FeedbackForm;
