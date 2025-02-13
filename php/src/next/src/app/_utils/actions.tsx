import { redirect } from "next/navigation";
import { authUserLogin, authUserSignUp } from "../_services/fetchDataAPI";
// react-toastify・・・恐らくフラッシュメッセージのライブラリの類。
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export async function loginUser(formData: FormData) {
  // フォームから送信されたデータを一括でformData引数でまとめて扱っている。
  // 引数formDataから各name属性に対応したプロパティを取得している。あと多分代入前にasをつける事で型をつけている。
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  //
  const user = await authUserLogin(email, password);
  if (user && user != null) {
    toast.success("Login successfully");
    redirect("/home");
  }
}

export async function registerUser(formData: FormData) {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
//   const name = formData.get("name") as string;
//   const username = formData.get("username") as string;
  const user = await authUserSignUp(email, password);
  if (user && user != null) {
    toast.success("SignUp successfully");
    redirect("/home");
  }
}

export async function loginTestUser() {
  const email = process.env.NEXT_PUBLIC_USER;
  const password = process.env.NEXT_PUBLIC_PWD;
  // @ts-ignore
  const user = await authUserLogin(email, password);
  if (user && user != null) {
    toast.success("Login testUser successfully");
    redirect("/home");
  }
}
