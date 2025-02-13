import { registerUser } from "../_utils/actions";
import SubmitButton from "./SubmitButton";

function SignUpForm() {
  return (
    <form
      className="flex w-full max-w-md flex-col gap-4 border border-gray-300 p-8 shadow-lg"
      action={registerUser}
    >
      {/* <label htmlFor="name" className="text-xl">
        ユーザーネーム
        <input
          type="text"
          id="name"
          name="name"
          className="input"
          required
          pattern="^[a-zA-Z0-9_]{1,12}$"
          title="Only letters, numbers, _ are allowed. Maximum length is 12 characters"
        />
      </label>
      <label htmlFor="displayName" className="text-xl">
        ディスプレイユーザーネーム
        <input
          type="text"
          id="username"
          name="username"
          className="input"
          required
          pattern=".{1,12}"
          title="Display name must be between 1 and 12 characters long"
        />
      </label> */}
      <label htmlFor="email" className="text-xl">
        メールアドレス
        <input
          type="email"
          id="email"
          name="email"
          className="input"
          required
        />
      </label>
      <label htmlFor="password" className="text-xl">
        パスワード
        <input
          type="password"
          id="password"
          name="password"
          className="input"
          minLength={8}
          title="Password must be at least 8 characters long"
          required
        />
      </label>
      <SubmitButton pendingLabel="Loading...">Create Account</SubmitButton>
    </form>
  );
}

export default SignUpForm;
