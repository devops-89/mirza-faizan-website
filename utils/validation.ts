import * as Yup from "yup";

export const contactValidationSchema = Yup.object().shape({
  name: Yup.string()
    .trim()
    .min(2, "Name must be at least 2 characters")
    .required("Your Name is required"),
  email: Yup.string()
    .trim()
    .email("Please enter a valid email address")
    .required("Email Address is required"),
  message: Yup.string()
    .trim()
    .min(10, "Message must be at least 10 characters")
    .required("Message is required"),
});

export interface ContactFormValues {
  name: string;
  email: string;
  message: string;
}

export const initialContactFormValues: ContactFormValues = {
  name: "",
  email: "",
  message: "",
};
