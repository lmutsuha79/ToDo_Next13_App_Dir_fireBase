import { toast } from "react-toastify";

export const notify = (satatus, message, posion) => {
  switch (satatus) {
    case "success":
      toast.success(message, {
        position: posion ? posion : "bottom-right",
      });
      break;
    case "error":
      toast.error(message, {
        position: posion ? posion : "bottom-right",
      });
      break;
    default:
      toast(message);
  }
};

export const loadingToast = () =>
  toast.promise("Loading...", {
    icon: "🚀",
    closeOnClick: false,
    autoClose: false,
  });
