import useLoginModal from "@/hooks/useLoginModal";
import Modal from "./modal";
import { useState } from "react";
import { FieldValues, useForm } from "react-hook-form";

const LoginModal = () => {
  const loginModal = useLoginModal();

  const [loading, setLoading] = useState(false);

  const { control, handleSubmit, register, trigger } = useForm<FieldValues>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (data: unknown) => {
    setLoading(true);
    console.log(data);
    setLoading(false);
  };

  const inputFields = [
    {
      label: "Email",
      placeholder: "Insert your email",
      id: "email",
      conditions: {
        required: true,
      },
    },
    {
      label: "Password",
      placeholder: "Insert your password",
      id: "password",
      type: "password",
      conditions: {
        required: true,
      },
    },
  ];

  return (
    <div>
      <Modal
        title={"Welcome Back"}
        description={"Please login"}
        fields={inputFields}
        isRegister={false}
        onClose={loginModal.onClose}
        isOpen={loginModal.isOpen}
        onSubmit={handleSubmit(onSubmit)}
        loading={loading}
        control={control}
        register={register}
        trigger={trigger}
      />
    </div>
  );
};

export default LoginModal;
