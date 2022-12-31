import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import { init } from "@emailjs/browser";
init("3fbuxzqOLspKySLk8");
import { useState } from "react";

export default function useContactUs() {
  const initialState = {
    fullname: "",
    email: "",
    message: "",
  };
  const [formData, setFormData] = useState(initialState);
  const [isLoading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send("service_0gy7qbn", "template_i1t9g2n", {
        fullname: formData.fullname,
        email: formData.email,
        message: formData.message,
      })
      .then(() => {
        setLoading(false);
        setFormData(initialState);
        Swal.fire("Great!", "Thanks you for contact us!", "success");
      })
      .catch((e) => {
        console.log(e);
        setLoading(false);
        Swal.fire("Oops!", "Failed to submit form, Please Try again!", "error");
      });
  };
  return { setFormData, isLoading, handleSubmit, formData };
}
