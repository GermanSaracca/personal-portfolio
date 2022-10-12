const Button = ({ text }) => {
    return (
        <div className="isolate">
            <button
                className="inline-block my-2 relative px-4 py-2 border-2 bg-gray-300 dark:bg-gray-800 border-gray-800 
                dark:border-sky-400 after:w-full after:h-full after:absolute after:left-[0.3rem] after:top-[0.4rem] after:bg-gray-300 
                after:dark:border-sky-400 after:dark:bg-gray-800 after:-z-10 text-gray-800 dark:text-gray-200 uppercase font-semibold after:border-gray-800 after:border-2 hover:after:left-2 hover:after:top-[0.6rem] after:transition-all after:ease-linear 
                focus-visible:outline-offset-8"
                type="submit"
            >
                {text}
            </button>
        </div>
    )
}
export default Button
