import { auth } from "../firebase/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useDispatch } from "react-redux";
import { login } from "../features/userSlice";
import { toast } from "sonner";

function useLogin() {
  const dispatch = useDispatch();

  const loginWithGmail = async (email, password) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      const user = userCredential.user;
      dispatch(login(user));
      toast.success("Welcome back " + user.displayName);
    } catch (error) {
      const errorMessage = error.message;
      toast.error(errorMessage);
    }
  };

  return { loginWithGmail };
}

export { useLogin };
