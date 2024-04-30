export type SetStateType = React.Dispatch<React.SetStateAction<string>>;

export type Props = {
  type: "text" | "number" | "email" | "password";
  placeholder: string;
  input: string;
  setInput: SetStateType;
};
