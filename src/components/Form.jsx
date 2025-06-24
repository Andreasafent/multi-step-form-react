import { useEffect } from "react";
import useMediaQuery from "../hooks/useMediaQuery";
import Sidebar from "./Desktop/Sidebar";

function Form() {

    const isDesktop = useMediaQuery('(min-width: 768px)');

    useEffect(() => {
        console.log(`Is mobile: ${isDesktop}`);
    }, [isDesktop]);


    return (
        isDesktop ? (
            <div className="flex items-center justify-center h-[100vh]">
                <div className="w-[850px] h-[600px] rounded-2xl shadow-md bg-white p-4">
                    <div className="flex gap-25 h-full">
                        <Sidebar />

                        <div className="border rounded-2xl flex-grow-1">
                            {/* STEP 1 */}
                        </div>
                    </div>
                </div>
            </div>
        ) : (
            null
        )

    )
}

export default Form;