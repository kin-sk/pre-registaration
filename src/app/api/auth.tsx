import {
  RecaptchaVerifier,
  ConfirmationResult,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPhoneNumber,
  signOut,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
} from "firebase/auth";

export const _loginWithEmailAndPassword = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}): Promise<string> => {
  try {
    const auth = getAuth();
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password,
    );
    return userCredential.user.uid;
  } catch {
    return "";
  }
};

{
  /* <Box id="recaptcha-container"></Box> */
}

// useEffect(() => {
//   if (typeof window === "undefined") return;
//   const auth = getAuth();
//   window.recaptchaVerifier = new RecaptchaVerifier(
//     auth,
//     "recaptcha-container",
//     { size: "invisible" }
//   );
// }, []);
export const _loginWithPhoneNumber = async ({
  phoneNumber,
  recaptchaVerifier,
}: {
  phoneNumber: string;
  recaptchaVerifier: RecaptchaVerifier;
}): Promise<ConfirmationResult | undefined> => {
  try {
    if (!recaptchaVerifier) return;
    const auth = getAuth();
    const confirmResult = await signInWithPhoneNumber(
      auth,
      phoneNumber,
      recaptchaVerifier,
    );
    return confirmResult;
  } catch {
    return;
  }
};
export const _confirmLoginVerifyCode = async ({
  confirmationResult,
  verifyCode,
}: {
  confirmationResult: ConfirmationResult;
  verifyCode: string;
}): Promise<string | undefined> => {
  if (!confirmationResult) return;
  try {
    const result = await confirmationResult.confirm(verifyCode);
    return result.user.uid;
  } catch (e) {
    console.log(e);
    return;
  }
};

export const _createUserWithEmailAndPassword = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  try {
    const auth = getAuth();
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password,
    );
    return { preUserId: userCredential.user.uid, error: "" };
  } catch (e) {
    console.log(e);
    return {
      userId: "",
      error: String(e).includes("already")
        ? "メールアドレスが既に登録されています。ログインしてください。"
        : "エラーが発生しました。入力内容を再度ご確認ください。",
    };
  }
};
export const _getUserId = () => {
  try {
    const auth = getAuth();
    return auth.currentUser?.uid;
  } catch (e) {
    console.log(e);
    return;
  }
};

export const _onAuthState = (setUserId: (x: string) => void): void => {
  const auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user?.uid) {
      setUserId(user.uid);
    }
  });
};

export const _logout = async (): Promise<void> => {
  try {
    const auth = getAuth();
    await signOut(auth);
  } catch (error) {
    throw error;
  }
};
export const _forgetPassword = async (email: string): Promise<void> => {
  try {
    const auth = getAuth();
    await sendPasswordResetEmail(auth, email);
  } catch (error) {
    throw error;
  }
};
