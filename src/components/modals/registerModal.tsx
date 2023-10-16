import Modal from "./modal";
import { useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import useRegisterModal from "@/hooks/useRegisterModal";

const RegisterModal = () => {
  const registerModal = useRegisterModal();

  const [loading, setLoading] = useState(false);

  const { control, handleSubmit, register, trigger } = useForm<FieldValues>({
    defaultValues: {
      email: "",
      username: "",
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
        pattern: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$/,
      },
    },
    {
      label: "Username",
      placeholder: "Insert your username",
      id: "username",
      conditions: {
        required: true,
        pattern: /^[a-zA-Z0-9]{4,20}$/,
      },
    },
    {
      label: "Password",
      placeholder: "Insert your password",
      id: "password",
      type: "password",
      conditions: {
        required: true,
        pattern: /^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[\d]){1,})(?=(.*[\W]){1,})(?!.*\s).{8,}$/,
      },
    },
  ];

  return (
    <div>
      <Modal
        title={"Create an account"}
        description={"Please register"}
        fields={inputFields}
        isRegister={true}
        onClose={registerModal.onClose}
        isOpen={registerModal.isOpen}
        onSubmit={handleSubmit(onSubmit)}
        loading={loading}
        control={control}
        register={register}
        trigger={trigger}
      />
    </div>
  );
};

export default RegisterModal;
