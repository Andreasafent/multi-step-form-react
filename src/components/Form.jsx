import { useEffect, useState } from "react";
import useMediaQuery from "../hooks/useMediaQuery";
import Sidebar from "./Desktop/Sidebar";
import Step1Desktop from "./Desktop/Step1Desktop";

function Form() {

    const isDesktop = useMediaQuery('(min-width: 768px)');

    const steps = [
        '1',
        '2',
        '3',
        '4',
        'Thank you'
    ]

    const [step, setStep] = useState('1');

    useEffect(() => {
        console.log(`Is mobile: ${isDesktop}`);
    }, [isDesktop]);

    useEffect(()=>{console.log(step);}, []);


    return (
        isDesktop ? (
            <div className="flex items-center justify-center h-[100vh]">
                <div className="w-[900px] h-[600px] rounded-2xl shadow-md bg-white p-4">
                    <div className="flex  h-full">
                        <Sidebar
                            step = {step}
                        />

                        { step === '1' && <Step1Desktop /> }
                    </div>
                </div>
            </div>
        ) : (
            <p className="font-bold text-3xl">YOU ARE ON MOBILE</p>
        )

    )
}

export default Form;