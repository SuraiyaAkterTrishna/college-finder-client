const ReviewCard = ({review}) => {
    const {
      _id,
      college,
      reviewer,
      image,
      rating,
      feedback
    } = review;
  return (
    <div className="mb-2 lg:mb-12 md:mb-0 text-center pb-8">
      <div className="mb-6 flex justify-center">
      <img
        src={image}
        className="w-32 h-32 rounded-full shadow-lg dark:shadow-black/30" />
    </div>
      <h5 className="mb-4 text-xl md:text-2xl lg:text-3xl font-semibold">{college}</h5>
      <h6 className="mb-4 text-md md:text-lg lg:text-xl font-semibold text-primary dark:text-primary-400">
        {reviewer}
      </h6>
      <p className="mb-4 text-neutral-600 dark:text-neutral-300 px-8 md:px-12">
        <span className="inline-block pe-2 [&>svg]:w-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 448 512"
          >
            <path d="M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z" />
          </svg>
        </span>
        {feedback}
      </p>
      <ul className="mb-0 flex items-center justify-center text-yellow-500 text-5xl">
        <li>
        {"★".repeat(rating)}
        </li>
        <li>
        {"☆".repeat(5 - rating)}
        </li>
      </ul>
    </div>
  );
};

export default ReviewCard;
