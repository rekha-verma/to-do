import React from 'react';
interface IProps {
    type: "button" | "submit" | "reset" | undefined
}

const Button = (props: IProps) => {
    return (
        <button {...props} className='bg-black text-white rounded-full w-8 h-8 text-center border shadow-slate-100'>
            <span>
                +
            </span>
        </button>
    )
}

export default Button