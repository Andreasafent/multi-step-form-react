import { useState } from "react";

function Step1Desktop({ handleNextStep }) {
    
    return (
        <div className="flex-grow-1 px-18 pt-10 pb-6 flex flex-col justify-between">

            <div className="flex flex-col gap-2">
                <h1 className="text-3xl font-bold primary-blue-950">Personal info</h1>
                <p className="text-md font-regular neutral-grey-500">Please provide your name, email address, and phone number.</p>
            </div>

            <form className="flex flex-col gap-6 -mt-10">
                <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="text-sm font-medium primary-blue-950">Name</label>
                    <input type="text" id="name" placeholder="e.g. Stephen King" className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-1 focus:ring-purple-600" required />
                </div>

                <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="text-sm font-medium primary-blue-950">Email Address</label>
                    <input type="text" id="email" placeholder="e.g. stephenking@lorem.com" className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-1 focus:ring-purple-600" required />
                </div>

                <div className="flex flex-col gap-2">
                    <label htmlFor="phone" className="text-sm font-medium primary-blue-950">Phone Number</label>
                    <input type="text" id="phone" placeholder="e.g. +1 234 567 890" className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-1 focus:ring-purple-600" required />
                </div>
            </form>

            <div className="self-end">
                <button className="bg-primary-blue-950 text-white font-medium py-3 px-4 rounded-lg hover:bg-primary-purple-600 hover:cursor-pointer transition-colors duration-150" onClick={handleNextStep}>
                    Next Step
                </button>
            </div>

        </div>
    )

}

export default Step1Desktop;