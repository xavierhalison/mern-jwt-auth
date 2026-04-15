import { type ToasterProps, Toaster, ToastBar } from "react-hot-toast";

const Toast = ({ toastOptions, ...props }: ToasterProps) => {
  return (
    <Toaster {...props} toastOptions={{ ...toastOptions }}>
      {(t) => (
        <ToastBar toast={t}>
          {({ icon, message }) => (
            <>
              {icon}
              {message}
            </>
          )}
        </ToastBar>
      )}
    </Toaster>
  );
};

export default Toast;
