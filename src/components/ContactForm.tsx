"use client";

import { useFormik } from "formik";
import * as Yup from "yup";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Select } from "./ui/select";
import { Textarea } from "./ui/textarea";

const validationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  city: Yup.string().required("City is required"),
  mobile: Yup.string()
    .matches(/^[0-9]{10}$/, "Invalid mobile number")
    .required("Mobile number is required"),
  product: Yup.string().required("Product selection is required"),
  message: Yup.string(),
});

export default function ContactForm() {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      city: "",
      mobile: "",
      product: "",
      message: "",
    },
    validationSchema,
    onSubmit: (values) => {
      // console.log(values)
      // Handle form submission
    },
  });

  return (
    <section className="animate-section relative w-full py-12">
      {/* Form content from your existing code, integrated with Formik */}
    </section>
  );
}
