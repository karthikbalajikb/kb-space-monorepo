const Button = ({ label, width, height, onClick }) => (
    <button className="flex justify-center items-center border-none outline-none w-48 h-10 cursor-pointer rounded-full bg-gradient-brand shadow-smActive">
        {label}
    </button>
);

export default Button;
