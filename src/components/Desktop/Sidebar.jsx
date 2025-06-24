function Sidebar() {
    return (
        <div className="w-[274px] px-8 py-10 bg-sidebar-desktop">
            <ul className="flex flex-col gap-7 text-white">
                <li className="flex gap-4 items-center">
                    <div className="w-10 h-10 rounded-full border border-white bg-primary-blue-200 text-black flex items-center justify-center font-medium text-lg">
                        1
                    </div>
                    <div className="flex flex-col">
                        <h2 className="font-regular text-sm neutral-grey-500">STEP 1</h2>
                        <p className="font-medium tracking-[1px] text-sm">YOUR INFO</p>
                    </div>
                </li>
                <li className="flex gap-4 items-center">
                    <div className="w-10 h-10 rounded-full border border-white text-black flex items-center justify-center text-white font-medium text-lg">
                        2
                    </div>
                    <div className="flex flex-col">
                        <h2 className="font-regular text-sm neutral-grey-500">STEP 2</h2>
                        <p className="font-medium tracking-[1px] text-sm">SELECT PLAN</p>
                    </div>
                </li>
                <li className="flex gap-4 items-center">
                    <div className="w-10 h-10 rounded-full border border-white text-black flex items-center justify-center text-white font-medium text-lg">
                        3
                    </div>
                    <div className="flex flex-col">
                        <h2 className="font-regular text-sm neutral-grey-500">STEP 3</h2>
                        <p className="font-medium tracking-[1px] text-sm">ADD-ONS</p>
                    </div>
                </li>
                <li className="flex gap-4 items-center">
                    <div className="w-10 h-10 rounded-full border border-white text-black flex items-center justify-center text-white font-medium text-lg">
                        4
                    </div>
                    <div className="flex flex-col">
                        <h2 className="font-regular text-sm neutral-grey-500">STEP 4</h2>
                        <p className="font-medium tracking-[1px] text-sm">SUMMARY</p>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default Sidebar;