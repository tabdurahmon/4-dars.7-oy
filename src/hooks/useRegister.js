import { auth } from "../firebase/firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useDispatch } from "react-redux";
import { login } from "../features/userSlice";
import { toast } from "sonner";

function useRegister() {
  const dispatch = useDispatch();

  const registerWidthGmail = async (userInfo) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        userInfo.email,
        userInfo.password
      );

      await updateProfile(auth.currentUser, { displayName: userInfo.name });

      const user = userCredential.user;
      dispatch(login(user));
      toast.success("Welcome " + user.displayName);
    } catch (error) {
      const errorMessage = error.message;
      toast.error(errorMessage);
    }
  };

  return { registerWidthGmail };
}

export { useRegister };
