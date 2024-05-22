

const HeadDash = ({head,subHead,icn}) => {
    return (
        <div className=" w-full relative mb-3 md:mb-10 ">
   
    <div className="relative  bottom-0 isolate overflow-hidden px-6  ">

        <h4
            className="flex items-center justify-center mx-auto max-w-2xl text-center text-3xl font-bold tracking-tight sm:text-4xl text-[#1E2D24] ">
            {icn}{head}
        </h4>

        <p className="mx-auto mt-2 max-w-xl text-center text-lg leading-8  text-gray-700">
            {subHead}
        </p>

        {/* <form className="mx-auto mt-10 flex max-w-md gap-x-4">
            <label  className="sr-only">Email address</label>
            <input id="email-address" name="email" type="email" required="" className="min-w-0 flex-auto rounded-md bg-gray-200/50 border-0  px-3.5 py-2  sm:text-sm sm:leading-6" placeholder="Enter your email"/>
            <button type="submit" className="flex-none border border-primary-200/50 dark:border-none rounded-md   bg-gray-100 text-[#1E2D24] px-3.5 py-2.5 text-sm font-semibold shadow-sm hover:bg-gray-100 ">
                Notify me
            </button>
        </form> */}

        <svg viewBox="0 0 1024 1024" className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2"
            aria-hidden="true">
            <circle cx="512" cy="512" r="512" fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fillOpacity="0.7">
            </circle>
            <defs>
                <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641" cx="0" cy="0" r="1"
                    gradientUnits="userSpaceOnUse" gradientTransform="translate(512 512) rotate(90) scale(512)">
                    <stop stopColor="#7775D8"></stop>
                    <stop offset="1" stopColor="#7ED321" stopOpacity="0"></stop>
                </radialGradient>
            </defs>
        </svg>
    </div>

</div>
    );
};

export default HeadDash;