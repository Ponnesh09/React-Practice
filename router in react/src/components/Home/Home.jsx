import React from 'react'
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        
        <div className="mx-auto w-full max-w-7xl">
            <aside className="relative overflow-hidden text-black rounded-lg sm:mx-16 mx-2 sm:py-16">
                <div className="relative z-10 max-w-7xl px-4  pb-20 pt-10 sm:py-24 mx-auto sm:px-6 lg:px-8 ">
                    <div className="max-w-xl sm:mt-1 mt-80 space-y-8 text-center sm:text-right sm:ml-auto">
                        <h2 className="text-4xl font-bold sm:text-5xl">
                             Marvel Cinematic Universe
                            <span className="hidden sm:block text-4xl">warm welcome</span>
                        </h2>

                        <Link
                            className="inline-flex text-black items-center px-6 py-3 font-medium bg-red-200 rounded-lg hover:opacity-75"
                            to="/"
                        >
                            <svg
                                fill="white"
                                width="24"
                                height="24"
                                xmlns="http://www.w3.org/2000/svg"
                                fillRule="evenodd"
                                clipRule="evenodd"
                            >
                                <path d="M1.571 23.664l10.531-10.501 3.712 3.701-12.519 6.941c-.476.264-1.059.26-1.532-.011l-.192-.13zm9.469-11.56l-10.04 10.011v-20.022l10.04 10.011zm6.274-4.137l4.905 2.719c.482.268.781.77.781 1.314s-.299 1.046-.781 1.314l-5.039 2.793-4.015-4.003 4.149-4.137zm-15.854-7.534c.09-.087.191-.163.303-.227.473-.271 1.056-.275 1.532-.011l12.653 7.015-3.846 3.835-10.642-10.612z" />
                            </svg>
                            &nbsp; Download now
                        </Link>
                    </div>
                </div>

                <div className="absolute inset-0 w-full sm:my-20 sm:pt-1 pt-12 h-auto  bg-gradient-to-br from-black via-gray-300 to-green-300">
                    <img className="w-2xl" src="https://4kwallpapers.com/images/walls/thumbs_3t/17768.jpg" alt="image1" />
                </div>
            </aside>

            <div className="grid  place-items-center sm:mt-20 bg-gradient-to-br from-black via-gray-500 to-red-700">
                <img className="w-3xl " src="https://4kwallpapers.com/images/walls/thumbs_3t/1140.jpg" alt="image2" />
            </div>

            <h1 className="text-center text-xl sm:text-5xl py-10 font-small">Journey into the cosmic depths of the mighty Marvel Cinematic Universe!</h1>
        </div>
    );
}
