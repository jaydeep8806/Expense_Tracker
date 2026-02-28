import React from 'react'

function Hero() {
    return (
        <section className="bg-grey-50">
            <div className="mx-auto max-w-screen-xl px-4 py-64 lg:flex">
                <div className="mx-auto max-w-xl text-center">
                    <h1 className="text-3xl font-bold text-gray-900 sm:text-5xl">
                        Manage your expenses <br />
                        <strong className="text-indigo-600"> Control </strong>
                        Your Money
                    </h1>

                    <p className="mt-4 text-base text-pretty text-gray-700 sm:text-lg/relaxed">
                        Start Creating Your Budget And Save Ton Of Money
                    </p>

                    <div className="mt-4 flex justify-center gap-4 sm:mt-6">
                        <a className="inline-block rounded border border-indigo-600 bg-indigo-600 px-5 py-3 font-medium text-white shadow-sm transition-colors hover:bg-indigo-700" href="#">
                            Get Started
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero