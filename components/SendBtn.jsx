import React from "react";
import { useFormStatus } from "react-dom";
import SendIcon from '@mui/icons-material/Send';

const SendBtn = () => {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      className="group mt-5 flex items-center justify-center gap-2 h-[3rem] w-full bg-gradient-to-r from-blue-600 to-green-500 text-white rounded-md outline-none transition-all hover:scale-[1.01]"
      disabled={pending}
    >
      {pending ? (
        <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white"></div>
      ) : (
        <>
          Submit{" "}
          <SendIcon className="text-base opacity-70 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
        </>
      )}
    </button>
  );
};

export default SendBtn;
