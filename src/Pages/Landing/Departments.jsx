import { Fragment, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faChevronLeft,
	faChevronRight,
	faStar,
	faStarHalfAlt,
} from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames";
import PropTypes from "prop-types";

const testimonialList = [
	{
		author: {
			fullName: "Akshay Kumar",
			picture:
				"https://cdn.easyfrontend.com/pictures/testimonial/testimonial_15.png",
			designation: "Founder / CEO",
		},
		rating: 3.5,
		description:
			"It’s easier to reach your savings goals when you have the right savings account. Take a look and find the right one for you.It’s easier to reach your savings goals when you have the right savings account. Take a look and find the right one for youIt’s easier to reach your savings goals when you have the right savings account. Take a look and find the right one for you!",
	},
	{
		author: {
			fullName: "Raima Sen",
			picture:
				"https://cdn.easyfrontend.com/pictures/testimonial/testimonial_15.png",
			designation: "UI Designer",
		},
		rating: 4,
		description:
			"It’s easier to reach your savings goals when you have the right savings account. Take a look and find the right one for you.It’s easier to reach your savings goals when you have the right savings account. Take a look and find the right one for youIt’s easier to reach your savings goals when you have the right savings account. Take a look and find the right one for you!",
	},
	{
		author: {
			fullName: "Arjun Kapur",
			picture:
				"https://cdn.easyfrontend.com/pictures/testimonial/testimonial_15.png",
			designation: "HR Manager",
		},
		rating: 5,
		description:
			"It’s easier to reach your savings goals when you have the right savings account. Take a look and find the right one for you.It’s easier to reach your savings goals when you have the right savings account. Take a look and find the right one for youIt’s easier to reach your savings goals when you have the right savings account. Take a look and find the right one for you!",
	},
];

const Rating = ({ rating, showLabel, className, ...rest }) => (
	<p className={classNames("mb-6", className)} {...rest}>
		<span>
			{[...Array(5)].map((_, i) => {
				const index = i + 1;
				let content = "";
				if (index <= Math.floor(rating))
					content = (
						<FontAwesomeIcon icon={faStar} className="text-yellow-500" />
					);
				else if (rating > i && rating < index + 1)
					content = (
						<FontAwesomeIcon icon={faStarHalfAlt} className="text-yellow-500" />
					);
				else if (index > rating)
					content = (
						<FontAwesomeIcon
							icon={faStar}
							className="text-yellow-200 dark:text-opacity-20"
						/>
					);

				return <Fragment key={i}>{content}</Fragment>;
			})}
		</span>
		{showLabel && <span>{rating.toFixed(1)}</span>}
	</p>
);

Rating.propTypes = {
	rating: PropTypes.number.isRequired,
	showLabel: PropTypes.bool,
	className: PropTypes.string,
};

const Departments = () => {
    const [index, setIndex] = useState(0);
	const { author, description, rating } = testimonialList[index];

	const handleControl = (type) => {
		if (type === "prev") {
			setIndex(index <= 0 ? testimonialList.length - 1 : index - 1);
		} else if (type === "next") {
			setIndex(index >= testimonialList.length - 1 ? 0 : index + 1);
		}
	};
    return (
        <section className="ezy__testimonial15 light py-14 md:py-24  text-zinc-900  overflow-hidden">
        <div className="container px-4 mx-auto">
            <div className="flex justify-center text-center mb-6 lg:mb-12">
                <div className="max-w-lg">
                    <h2 className="text-3xl leading-none md:text-[45px] font-bold mb-6">
                        Community Reviews
                    </h2>
                    <p className="">
                        Assumenda non repellendus distinctio nihil dicta sapiente,
                        quibusdam maiores, illum at qui.
                    </p>
                </div>
            </div>

            <div className="flex justify-center">
                <div className="max-w-5xl">
                    <div className="grid grid-cols-12 gap-y-6 md:gap-x-6 mt-12">
                        <div className="col-span-12 md:col-span-5 lg:col-start-8 text-center lg:order-2">
                            <div className="relative z-[1]">
                                <div className="absolute top-0 left-0 right-0 bottom-0 bg-[#eb5757] rounded-tl-[100px] rounded-br-[100px] md:rounded-tl-[200px] md:rounded-br-[200px] -z-[1]" />
                                <img
                                    src={author.picture}
                                    alt={author.fullName}
                                    className="rounded-tl-[100px] rounded-br-[100px] md:rounded-tl-[200px] md:rounded-br-[200px] -translate-x-2 -translate-y-2 md:-translate-x-6 md:-translate-y-6 hover:translate-x-0 hover:translate-y-0 transition duration-300"
                                />
                            </div>
                        </div>

                        <div className="col-span-12 md:col-span-6 ezy__testimonial15-content text-center md:text-start">
                            <div className="flex flex-col justify-center h-full">
                                <Rating rating={rating} showLabel={false} />
                                <h4 className="text-2xl font-medium mb-1">
                                    {author.fullName}
                                </h4>
                                <p className="mb-6">{author.designation}</p>
                                <p className="opacity-75">{description}</p>

                                <div className="mt-12">
                                    <button
                                        className="w-10 h-10 text-[12px] bg-transparent border border-slate-400 dark:border-slate-600 rounded-full inline-flex items-center justify-center duration-150 hover:bg-slate-400 hover:text-slate-800 dark:hover:bg-slate-700 dark:hover:text-slate-200 mr-3"
                                        onClick={() => handleControl("prev")}
                                    >
                                        <FontAwesomeIcon icon={faChevronLeft} />
                                    </button>
                                    <button
                                        className="w-10 h-10 text-[12px] bg-transparent border border-slate-400 dark:border-slate-600 rounded-full inline-flex items-center justify-center duration-150 hover:bg-slate-400 hover:text-slate-800 dark:hover:bg-slate-700 dark:hover:text-slate-200"
                                        onClick={() => handleControl("next")}
                                    >
                                        <FontAwesomeIcon icon={faChevronRight} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
};

export default Departments;