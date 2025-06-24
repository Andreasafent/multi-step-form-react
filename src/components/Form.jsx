import Sidebar from "./Desktop/Sidebar";

function Form() {
    return (
        <div className="w-[850px] h-[600px] rounded-2xl shadow-md bg-white p-4">
            <div className="flex gap-25 h-full">
                <Sidebar />

                <div className="border rounded-2xl flex-grow-1">
                    
                </div>
            </div>
        </div>
    )
}

export default Form;