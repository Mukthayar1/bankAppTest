import { apiPost } from "../../../helper/apiCalling";
import { LOGIN_API } from "../../../helper/apiConfig";
import { loginUser } from "../../Reducer/userReducer";
import { store } from "../../store";



const userLogin = async (email, password, SetModalMessage, SetModalVisibility, setLoading) => {

    const { dispatch } = store;
    setLoading(true);
    
    let data = {
        "email": email?.toLowerCase(),
        "password": password,
    }
    try {
        let res = await apiPost(LOGIN_API, data)
        if (res?.message == 'login successfully' && res?.status == 'Success') {
            dispatch(loginUser(res?.data))
        } else if (res?.message) {
            SetModalMessage(res?.message);
            SetModalVisibility(true);
        } else {
            SetModalMessage('Invalid credentials');
            SetModalVisibility(true);
        }
        setLoading(false)
    } catch (error) {
        console.log("userLogin raised", error)
        SetModalMessage(error?.error || error?.message);
        setLoading(false)
        SetModalVisibility(true)

    }
};


export {
    userLogin,
}