import { useState } from 'react';

function Checkbox({ title }) {
    const [isChecked, setIsChecked] = useState(false);
    return (
        <div
            type="button"
            className="flex w-full items-center justify-between rounded-lg px-3 py-1 text-start font-calSans text-sm duration-200"
        >
            <span className="pt-[2px] text-slate-600">{title}</span>
            <div
                className={`relative h-4 w-8 cursor-pointer rounded-full duration-200 ${isChecked ? 'bg-primary-hover' : 'bg-slate-200'}`}
                onClick={() => setIsChecked(!isChecked)}
            >
                <span
                    className={`absolute  top-1/2 z-10 inline-block h-3 w-3 -translate-y-1/2 rounded-full duration-200 ${isChecked ? 'left-[17px] bg-white' : 'left-[3px] bg-t-clr'}`}
                ></span>
            </div>
        </div>
    );
}

export default Checkbox;
