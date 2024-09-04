import { FC } from "react";
import { useFormStatus } from "react-dom";

const SubmitButton: FC = () => {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      aria-disabled={pending}
      className="bg-stone-500 rounded-md w-full py-4 text-lg sm:text-3xl tracking-wider focus:ring-4 focus:ring-amber-200 hover:bg-amber-800"
    >
      Create
    </button>
  );
};

export default SubmitButton;
