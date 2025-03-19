export const checkSignInData = (email: any, password: any) => {
    const isEmailValid = email ? /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email?.value) : false;
    const isPasswordValid = password ? /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password?.value) : false;
    if (!isEmailValid) return "Email ID is not valid";
    if (!isPasswordValid) return "Password is not valid";

}
export const checkSignUpData = (email: any, password: any, name?: any) => {
    const isEmailValid = email ? /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email?.value) : false;
    const isNameValid = name?.value?.length > 4 ? true : false;
    const isPasswordValid = password ? /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password?.value) : false;
    if (!isEmailValid) return "Email ID is not valid";
    if (!isPasswordValid) return "Password is not valid";
    if (!isNameValid) return "Name must be greater than 4 letters";
}
