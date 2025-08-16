import InputField from "./InputField";

export default {
    title: "Components/InputField",
    component: InputField,
}

// ....Default Input....
export const Default = {
    args: {
        label: "Username",
        placeholder: "Enter you name",
        helperText: "Helper text",
    }
}

// ....Invalid Input....
export const Invalid = {
    args: {
        label: "Email",
        placeholder: "Enter your email",
        invalid: true,
        errorMessage: "Invalid email",
    }
}

// ....Disabled Input....
export const Disabled = {
    args: {
        label: "Password",
        placeholder: "Enter password",
        disabled: true,
    }
}

// ....Clearable Input....
export const Clearable = {
    args: {
        label: "Search",
        placeholder: "Type something...",
        clearable: true,
    },
};

// ....Password Toggle Input....
export const PasswordToggle = {
    args: {
        label: "Password",
        placeholder: "Enter password",
        type: "password",
        passwordToggle: true,
    },
};

// ....Variants....
export const Filled = { args: { label: "Filled", variant: "filled" } }
export const Outlined = { args: { label: "Outlined", variant: "outlined" } }
export const Ghost = { args: { label: "Ghost", variant: "ghost" } }

// ....Sizes....
export const Small = { args: { label: "Small", size: "sm" } }
export const Medium = { args: { label: "Medium", size: "md" } }
export const Large = { args: { label: "Large", size: "lg" } }