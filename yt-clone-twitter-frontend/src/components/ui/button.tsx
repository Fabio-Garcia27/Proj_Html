type Props = {
    label: string;
    onClick?: () => void;
    size: 1 | 2 | 3;
}

export const Button = ({ label, onClick }: Props) => {
    return (
        <div onClick={onClick}>
            {label}
        </div>    
    )
}