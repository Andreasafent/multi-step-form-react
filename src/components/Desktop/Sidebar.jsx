function Sidebar({ step }) {

    const steps = [
        {
            number: 1,
            title: 'YOUR INFO',
            subtitle: 'STEP 1'
        },
        {
            number: 2,
            title: 'SELECT PLAN',
            subtitle: 'STEP 2'
        },
        {
            number: 3,
            title: 'ADD-ONS',
            subtitle: 'STEP 3'
        },
        {
            number: 4,
            title: 'SUMMARY',
            subtitle: 'STEP 4'
        }
    ]


    return (
        <div className="w-[274px] px-8 py-10 bg-sidebar-desktop">
            <ul className="flex flex-col gap-7 text-white">

                {steps.map((item, index) =>
                    <li key={index} className="flex gap-4 items-center">
                        <div className={`w-10 h-10 rounded-full border border-white ${step === item.number ? 'bg-primary-blue-200 text-black' : 'text-white'} flex items-center justify-center font-medium text-lg`}>
                            {item.number}
                        </div>
                        <div className="flex flex-col">
                            <h2 className="font-regular text-sm neutral-grey-500">{item.subtitle}</h2>
                            <p className="font-medium tracking-[1px] text-sm">{item.title}</p>
                        </div>
                    </li>
                )}
            </ul>
        </div>
    )
}

export default Sidebar;