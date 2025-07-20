"use client";
import React, { useEffect, useState } from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Checkbox } from "../../../../components/ui/checkbox";
import { Input } from "../../../../components/ui/input";
import { Textarea } from "../../../../components/ui/textarea";
import { Building2, Home, Mail, Phone } from "lucide-react";
import { Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import emailjs from "@emailjs/browser";
import Toast from "../../../../components/ui/toast";
import FadeInSection from "../../../../components/FadeInSection";
import ProductData from "../../../../productcopy.js";
import { log } from "console";
// import { usePathname } from "next/navigation.js";

// Define types for FormField props
interface FormFieldProps {
  name: string;
  label: string;
  placeholder: string;
  type: string;
  icon?: string;
  required?: boolean;
  options?: { productFullName: string }[];
}

// FormField component
const FormField: React.FC<FormFieldProps> = ({
  name,
  label,
  placeholder,
  type,
  icon,
  required,
  options,
}) => {
  return (
    <div className="flex flex-col">
      <div className="flex items-start gap-1 pb-2">
        <label className="font-XS-text text-black text-[length:var(--XS-text-font-size)] tracking-[var(--XS-text-letter-spacing)] leading-[var(--XS-text-line-height)]">
          {label}
        </label>
        {required && (
          <span className="font-normal text-[#FF0000] text-base">*</span>
        )}
      </div>
      <Field name={name}>
        {({ field, form }) => (
          <div
            className={`flex items-center gap-2.5 px-3 py-2 bg-[#ffffff63] rounded-[10px] border border-solid border-[#11111138] ${
              type === "textarea" ? "h-[159px] items-start pt-4" : "h-10"
            }`}
          >
            {icon && (
              <img className="w-6 h-6" alt={`${label} icon`} src={icon} />
            )}
            {type === "select" ? (
              <Field
                as="select"
                name={name}
                className="flex-1 bg-transparent border-0 p-0 h-10 text-[#111111]"
              >
                <option value="" disabled hidden>
                  {placeholder}
                </option>
                {options?.map((option) => (
                  <option
                    key={option?.productFullName}
                    value={option?.productFullName}
                  >
                    {option?.productFullName}
                  </option>
                ))}
              </Field>
            ) : type === "textarea" ? (
              <Textarea
                {...field}
                placeholder={placeholder}
                className="border-0 bg-transparent p-0 h-full shadow-none focus-visible:ring-0 placeholder:opacity-50 placeholder:font-XS-text placeholder:text-[#111111]"
              />
            ) : (
              <Input
                {...field}
                type={type}
                placeholder={placeholder}
                className="border-0 bg-transparent p-0 h-auto shadow-none focus-visible:ring-0 placeholder:opacity-50 placeholder:font-XS-text placeholder:text-[#111111]"
              />
            )}
          </div>
        )}
      </Field>
      <ErrorMessage
        name={name}
        component="div"
        className="text-[#FF0000] text-sm mt-1"
      />
    </div>
  );
};

// GetInTouch component
const GetInTouch = (): JSX.Element => {
  const [toast, setToast] = useState<{
    message: string;
    type: "success" | "error";
  } | null>(null);
  // Contact information data
  // const pathname = usePathname();
  const [pathname, setPathname] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      //  c log("Current Pathname:", window.location.pathname);
      // console.log("Current Pathname:", window.location.pathname);

      setPathname(window.location.pathname);
    }
  }, []);

  const isContactPage = pathname === "/contact/";
  // console.log("Is Contact Page:", isContactPage);

  const contactSections = [
    {
      title: "Office",
      description:
        "209, 2nd Floor, Conwood Paragon, Walbhat Rd, Cama Industrial Estate, Goregaon, Mumbai, Maharashtra 400063",
      hasDirections: "https://maps.app.goo.gl/B76hDo5WjvxSbMZB6?g_st=iw",
      icon: <Building2 size={20} />,
      render: !isContactPage,
    },
    {
      title: "Warehouse",
      description: `Sri Ram Logistics,
      Godown No. 6, 2nd Line, Dropadichhaya Compound, Behind Choudhary Compound, Near Anpurna Hotel, Purna Village,
      Bhiwandi - 421302`,
      hasDirections: "https://maps.app.goo.gl/VNUDPD9Yjm8UheCk9",
      icon: <Home size={20} />,
      render: !isContactPage,
    },
    {
      title: "Email",
      description: "sales@superconchem.com",
      hasDirections: "",
      icon: <Mail size={20} />,
      render: isContactPage,
    },
    {
      title: "Telephone",
      description: ["+91 22 40147991", "+91 22 40165308"],
      hasDirections: "",
      icon: <Phone size={20} />,
      render: isContactPage,
    },
  ];

  return (
    <section
      className={`relative py-12 my-12 custom-mar ${
        !isContactPage ? "bg-[#eef3f7]" : "bg-white"
      } md:bg-white center flex justify-center sm:py-12 px-4 sm:px-6 lg:px-12 flex justify-center`}
    >
      <div
        className={`w-full ${
          pathname === "/contact/"
            ? "bg-white md:mt-[6rem]"
            : "bg-[#eef3f7] md:p-12"
        } rounded-2xl overflow-hidden p-0 flex flex-col md:flex-row gap-6`}
      >
        {/* Contact Info */}
        <div className="w-full md:w-2/5 order-2 lg:order-1">
          <FadeInSection>
            {pathname === "/contact/" ? (
              <>
                <h2 className="text-[1.5rem] sm:text-[3rem] mt-[6rem] mb-4">
                  Thank you for reaching out!{" "}
                </h2>
                <h2 className="text-[1.5rem] mb-[10rem] sm:text-[3rem] mb-8">
                  Your message matters, and we’ll get back within 24 hours.
                </h2>
                {/* <p className="mt-2 text-base sm:text-lg opacity-80 mb-[10rem]">
                  Fill out a short form and our team will get back to you within
                  24 hours.
                </p> */}
              </>
            ) : (
              <>
                <h2 className="text-2xl sm:text-3xl font-semibold">
                  Need a quick quote or sample?
                </h2>
                <p className="mt-2 text-base sm:text-lg opacity-80">
                  Fill out a short form and our team will get back to you within
                  24 hours.
                </p>
              </>
            )}
          </FadeInSection>
          <div className="mt-8 gap-[5rem] grid grid-cols-1 sm:grid-cols-2 gap-8">
            {isContactPage
              ? contactSections
                  .filter((sec) => sec.render)
                  .map((sec, i) => (
                    <FadeInSection key={i} className="flex flex-col gap-4">
                      <div className="text-gray-700">{sec.icon}</div>
                      <h3 className="text-xl font-semibold opacity-80">
                        {sec.title}
                      </h3>

                      {Array.isArray(sec.description) ? (
                        <div className="flex flex-col gap-1">
                          {sec.description.map((line, idx) => (
                            <p key={idx} className="text-base opacity-80">
                              {line}
                            </p>
                          ))}
                        </div>
                      ) : (
                        <p className="text-base opacity-80">
                          {sec.description}
                        </p>
                      )}

                      {sec.hasDirections && (
                        <a
                          href={sec.hasDirections}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:underline text-base"
                        >
                          Get Directions
                        </a>
                      )}
                    </FadeInSection>
                  ))
              : contactSections.map((sec, i) => (
                  <FadeInSection key={i} className="flex flex-col gap-4">
                    <div className="text-gray-700">{sec.icon}</div>
                    <h3 className="text-xl font-semibold opacity-80">
                      {sec.title}
                    </h3>

                    {Array.isArray(sec.description) ? (
                      <div className="flex flex-col gap-1">
                        {sec.description.map((line, idx) => (
                          <p key={idx} className="text-base opacity-80">
                            {line}
                          </p>
                        ))}
                      </div>
                    ) : (
                      <p className="text-base opacity-80">{sec.description}</p>
                    )}

                    {sec.hasDirections && (
                      <a
                        href={sec.hasDirections}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline text-base"
                      >
                        Get Directions
                      </a>
                    )}
                  </FadeInSection>
                ))}
          </div>
        </div>

        {/* Contact Form */}
        <Card className="w-full md:w-3/5 bg-[#ffffff] rounded-2xl border border-[#f1f1f1] shadow-lg order-1 lg:order-2">
          <CardContent className="p-4 sm:p-8">
            <Formik
              initialValues={{
                name: "",
                email: "",
                city: "",
                mobile: "",
                product: "",
                otherProductName: "",
                message: "",
                termsAccepted: false,
              }}
              validationSchema={Yup.object({
                name: Yup.string()
                  .trim()
                  .required("Name is required")
                  .matches(/^[A-Za-z\s]+$/, "Invalid name"),
                email: Yup.string()
                  .email("Please enter a valid email address")
                  .required("Email is required"),
                city: Yup.string()
                  .trim()
                  .required("City is required")
                  .matches(/^[A-Za-z\s]+$/, "Invalid city name"),
                mobile: Yup.string()
                  .matches(
                    /^[0-9]{10}$/,
                    "Mobile number must be exactly 10 digits"
                  )
                  .required("Mobile number is required"),
                product: Yup.string().required("Please select a product"),
                // ← Conditionally require otherProductName only when product === "Other"
                otherProductName: Yup.string().when("product", {
                  is: "Other",
                  then: (schema) => schema.required("Product Name is required"),
                  otherwise: (schema) => schema.notRequired(),
                }),
                termsAccepted: Yup.boolean().oneOf(
                  [true],
                  "You must accept the terms and conditions"
                ),
              })}
              onSubmit={(values, { setSubmitting, resetForm }) => {
                emailjs
                  .send(
                    "service_ww2w5ua",
                    "template_e7pe1hi",
                    values,
                    "9MYatfjK9Bw5sHK4c"
                  )
                  .then(() => {
                    setToast({
                      message: "Your message has been sent successfully.",
                      type: "success",
                    });
                    resetForm();
                    setSubmitting(false);
                  })
                  .catch(() => {
                    setToast({
                      message: "Failed to send message. Please try again.",
                      type: "error",
                    });
                    setSubmitting(false);
                  });
              }}
            >
              {({ isSubmitting, values, handleSubmit }) => (
                <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FadeInSection>
                      <FormField
                        name="name"
                        label="Name"
                        placeholder="Enter Name"
                        type="text"
                        icon="/icon-1.svg"
                        required
                      />
                    </FadeInSection>
                    <FadeInSection>
                      <FormField
                        name="email"
                        label="Email"
                        placeholder="Enter Email"
                        type="email"
                        icon="/icon.svg"
                        required
                      />
                    </FadeInSection>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FadeInSection>
                      <FormField
                        name="city"
                        label="City"
                        placeholder="Enter City"
                        type="text"
                        icon="/map-location-dot-regular-1.svg"
                        required
                      />
                    </FadeInSection>
                    <FadeInSection>
                      <FormField
                        name="mobile"
                        label="Mobile Number"
                        placeholder="e.g. 9595959595"
                        type="tel"
                        icon="/phone-regular-1.svg"
                        required
                      />
                    </FadeInSection>
                  </div>

                  <FadeInSection>
                    <FormField
                      name="product"
                      label="Product Required"
                      placeholder="Select Product"
                      type="select"
                      icon="/briefcase-regular-1.svg"
                      required
                      options={[...ProductData, { productFullName: "Other" }]}
                    />
                  </FadeInSection>

                  {/* ← Conditionally render this only when “Other” is selected */}
                  {values.product === "Other" && (
                    <FadeInSection>
                      <FormField
                        name="otherProductName"
                        label="Product Name"
                        placeholder="Enter Product Name"
                        type="text"
                        icon="/briefcase-regular-1.svg"
                        required
                      />
                    </FadeInSection>
                  )}

                  <FadeInSection>
                    <FormField
                      name="message"
                      label="Message"
                      placeholder="Type Your Message Here"
                      type="textarea"
                    />
                  </FadeInSection>

                  <div className="flex gap-2 justify-center items-center">
                    <Field name="termsAccepted">
                      {({ field, form }) => (
                        <Checkbox
                          id="terms"
                          checked={field.value}
                          onCheckedChange={(val) =>
                            form.setFieldValue("termsAccepted", val)
                          }
                          className="w-5 h-5"
                        />
                      )}
                    </Field>
                    <label htmlFor="terms" className="text-base">
                      I agree to{" "}
                      <a href="/term-conditions" target="_blank">
                        {" "}
                        <span className="text-blue-600 hover:underline">
                          Terms & Conditions
                        </span>{" "}
                      </a>
                      and{" "}
                      <a href="/privacy-policy" target="_blank">
                        {" "}
                        <span className="text-blue-600 hover:underline">
                          Privacy Policy
                        </span>{" "}
                      </a>
                    </label>
                  </div>

                  <div className="container justify-center flex">
                    <Button
                      type="submit"
                      disabled={isSubmitting || !values.termsAccepted}
                      className="w-full md:px-40 sm:w-auto px-6 py-2 bg-[#5683AD] text-white rounded-full hover:bg-[#3f6d89]"
                    >
                      Get in Touch
                    </Button>
                  </div>

                  {toast && (
                    <Toast
                      message={toast.message}
                      type={toast.type}
                      onClose={() => setToast(null)}
                    />
                  )}
                </form>
              )}
            </Formik>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default GetInTouch;
