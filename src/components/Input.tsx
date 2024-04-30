import { Props } from "@/utils/type";

export default function Input({ type, placeholder,input, setInput }: Props) {
  return (
    <div className="my-3">
      <input
        type={type}
        placeholder={placeholder}
        className="p-2 rounded-sm text-black outline-none"
        onChange={(e) => setInput(e.target.value)}
        value={input}
      />
    </div>
  );
}
