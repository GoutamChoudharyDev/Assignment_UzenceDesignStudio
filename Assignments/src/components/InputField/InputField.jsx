import { useState } from 'react'

// React Icons
import { FiEye, FiEyeOff } from "react-icons/fi";


// ......InputField Component......
const InputField = ({
    // ....Props....
    value,
    onChange,
    label,
    placeholder,
    helperText,
    errorMessage,
    disabled = false,
    invalid = false,
    variant = 'outlined',
    size = 'md',
    type = 'text',
    clearable = false,
    passwordToggle = false,
}) => {

    // useStates
    const [internalValue, setInternalValue] = useState('')
    const [showPassword, setShowPassword] = useState(false)

    const isControlled = value !== undefined;
    const inputValue = isControlled ? value : internalValue;

    // handleChange function
    const handleChange = (e) => {
        if (!isControlled) setInternalValue(e.target.value)
        if (onChange) onChange(e);
    }

    // handleClear function
    const handleClear = () => {
        if (!isControlled) setInternalValue('')
        if (onChange) onChange({ target: { value: '' } })
    }

    // Tailwind Classes for different sizes
    const sizeClasses = {
        sm: 'px-2 py-1 text-sm',
        md: 'px-3 py-2 text-base',
        lg: 'px-4 py-3 text-lg',
    }

    // Tailwind classes for different variants
    const variantClasses = {
        filled: 'bg-gray-100 border border-transparent focus:border-blue-500',
        outlined: 'border border-gray-300 focus:border-blue-500',
        ghost: 'bg-transparent border-b border-gray-400 focus:border-blue-500',
    }

    return (
        <div className='flex flex-col w-full gap-1'>
            {/* ....Label.... */}
            {label && (<label className='text-gray-600 text-sm font-medium'>{label}</label>)}

            {/* ....Input firld.... */}
            <input
                type={passwordToggle ? (showPassword ? "text" : "password") : type}
                value={inputValue}
                onChange={handleChange}
                placeholder={placeholder}
                disabled={disabled}
                className={`
                    rounded-md outline-none transition
                    ${sizeClasses[size]}
                    ${variantClasses[variant]}
                    ${disabled ? "bg-gray-200 cursor-not-allowed" : ""}
                    ${invalid ? "border-red-600 focus:border-red-600" : ""}
                    `}
            />

            {/* ....Clear Button */}
            {clearable && inputValue && !disabled && (
                <button
                    type='button'
                    onClick={handleClear}
                    className="absolute right-2 top-6 text-gray-500 hover:text-black p-2 px-4 bg-red-500 rounded-full"
                >
                    X
                </button>
            )}

            {/* ....Password Toggle.... */}
            {passwordToggle && (
                <button
                    type="button"
                    onClick={() => setShowPassword((prev) => !prev)}
                    className="absolute right-2 text-gray-500 hover:text-black"
                >
                    {showPassword ? <FiEyeOff size={18} /> : <FiEye size={18} />}
                </button>
            )}

            {/* ....Helper text or Error message.... */}
            {!invalid && helperText && (
                <p className='text-gray-500 text-xs'>{helperText}</p>
            )}
            {invalid && errorMessage && (
                <p className='text-red-500 text-xs'>{errorMessage}</p>
            )}

        </div>
    )
}

export default InputField
