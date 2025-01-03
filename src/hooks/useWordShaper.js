const useWordShaper = (check) => {
    if (check === "makeOneWord") {
        return (input) => {
            return input.toLowerCase().replaceAll(" ", "");
        }
    }
}

export default useWordShaper