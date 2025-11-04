import React, { useState } from "react";
import { useForm } from "react-hook-form";

export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (data) => {
    // In a real app we'd POST to an API. Here we simulate success.
    console.log("Contact submit", data);
    setSubmitted(true);
  };

  if (submitted)
    return (
      <div id="contact" className="p-6 bg-white rounded-2xl shadow-md">
        <h3 className="text-xl font-semibold">
          Thanks — we’ll reply within 24 hours
        </h3>
        <p className="text-gray-600 mt-2">
          If it's urgent, email vdfcsoft@outlook.com
        </p>
      </div>
    );

  return (
    <form
      id="contact"
      onSubmit={handleSubmit(onSubmit)}
      className="p-6 bg-white rounded-2xl shadow-md"
    >
      <h3 className="text-xl font-semibold">Start a conversation</h3>
      <p className="text-gray-600 mt-2">
        We reply within 24 hours on weekdays.
      </p>
      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-3">
        <div>
          <label className="text-sm">Full name</label>
          <input
            className="mt-1 w-full p-2 border rounded focus-ring"
            {...register("name", { required: true })}
            aria-invalid={errors.name ? "true" : "false"}
          />
        </div>
        <div>
          <label className="text-sm">Company</label>
          <input
            className="mt-1 w-full p-2 border rounded focus-ring"
            {...register("company")}
          />
        </div>
        <div>
          <label className="text-sm">Email</label>
          <input
            type="email"
            className="mt-1 w-full p-2 border rounded focus-ring"
            {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
            aria-invalid={errors.email ? "true" : "false"}
          />
        </div>
        <div>
          <label className="text-sm">Budget</label>
          <input
            className="mt-1 w-full p-2 border rounded focus-ring"
            {...register("budget")}
          />
        </div>
      </div>
      <div className="mt-4">
        <label className="text-sm">Message</label>
        <textarea
          rows={5}
          className="mt-1 w-full p-2 border rounded focus-ring"
          {...register("message", { required: true })}
          aria-invalid={errors.message ? "true" : "false"}
        />
      </div>
      <div className="mt-4">
        <label className="inline-flex items-center">
          <input
            type="checkbox"
            className="mr-2"
            {...register("consent", { required: true })}
          />
          <span className="text-sm">
            I consent to receive communications and accept the{" "}
            <a href="/privacy" className="underline">
              Privacy Policy
            </a>
            .
          </span>
        </label>
        {errors.consent && (
          <div className="text-sm text-red-600 mt-1">
            You must accept the privacy policy.
          </div>
        )}
      </div>
      <div className="mt-4">
        <button
          type="submit"
          className="px-5 py-3 bg-primary text-white rounded-2xl"
        >
          Send message
        </button>
      </div>
    </form>
  );
}
