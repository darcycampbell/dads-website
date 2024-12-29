const useWordShaper = (check) => {
    if (check === "makeOneWordString") {
        return (input) => {
            return input.toLowerCase().replaceAll(" ", "");
        }
    }
}

export default useWordShaper