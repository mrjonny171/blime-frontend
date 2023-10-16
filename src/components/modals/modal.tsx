/* eslint-disable @typescript-eslint/ban-ts-comment */
import {
  Control,
  Controller,
  FieldValues,
  RegisterOptions,
  UseFormRegister,
  UseFormTrigger,
  ValidationRule,
} from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useCallback } from "react";

import { AiOutlineClose } from "react-icons/ai";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { BiError } from "react-icons/bi";

import SeparatorWithText from "../ui/separator-with-text";
import { Icons } from "../ui/icons";
import useRegisterModal from "@/hooks/useRegisterModal";
import useLoginModal from "@/hooks/useLoginModal";

interface inputProps {
  label: string;
  placeholder: string;
  id: string;
  type?: string;
  conditions: RegisterOptions<FieldValues, string> | undefined;
}

interface ModalProps {
  onClose: () => void;
  onSubmit: () => void;
  isOpen: boolean;
  title: string;
  description: string;
  fields: inputProps[];
  isRegister: boolean;
  loading: boolean;
  control: Control<FieldValues, unknown>;
  register: UseFormRegister<FieldValues>;
  trigger: UseFormTrigger<FieldValues>;
}

const Modal: React.FC<ModalProps> = ({
  title,
  description,
  fields,
  isOpen,
  isRegister,
  onClose,
  onSubmit,
  loading,
  control,
  register,
  trigger,
}) => {
  const registerModal = useRegisterModal();
  const loginModal = useLoginModal();

  const handleClose = useCallback(() => {
    if (loading) {
      return;
    }

    setTimeout(() => {
      onClose();
    }, 0);
  }, [onClose, loading]);

  const handleModalChange = useCallback(() => {
    if (loading) {
      return;
    }
    handleClose();

    if (isRegister) {
      loginModal.onOpen();
    } else {
      registerModal.onOpen();
    }
  }, [loading, handleClose, isRegister, loginModal, registerModal]);

  const onInputChange = async (field: string | readonly string[] | undefined) => {
    await trigger(field);
  };

  if (!isOpen) {
    return null;
  }

  const calculatePasswordStrength = (password: string) => {
    const criteria = {
      minLength: 8,
      hasUpperCase: /[A-Z]/.test(password),
      hasLowerCase: /[a-z]/.test(password),
      hasNumber: /[0-9]/.test(password),
      hasSpecialChar: /[!@#$%^&*()_+{}[\]:;<>,.?~\\/-]/.test(password),
    };

    const strength =
      (criteria.hasUpperCase ? 1 : 0) +
      (criteria.hasLowerCase ? 1 : 0) +
      (criteria.hasNumber ? 1 : 0) +
      (criteria.hasSpecialChar ? 1 : 0) +
      (password.length > 8 ? 1 : 0);

    if (strength < 2) {
      return "Weak";
    } else if (strength < 3) {
      return "Medium";
    } else if (strength < 5) {
      return "Strong";
    } else {
      return "Very Strong";
    }
  };

  const isPatternValid = (value: unknown, pattern: ValidationRule<RegExp> | undefined) => {
    //@ts-ignore
    return pattern.test(value);
  };

  return (
    <>
      <div
        className="
        justify-center 
        items-center 
        flex 
        overflow-x-hidden 
        overflow-y-auto 
        fixed 
        inset-0 
        z-50 
        outline-none 
        focus:outline-none
        bg-neutral-800/70
      "
      >
        <div
          className="
        relative 
        w-fit
        my-6
        mx-auto 
        lg:h-auto
        md:h-auto
        "
        >
          <Card className="w-[550px] dark:text-gray-200 dark:bg-gray-900">
            <CardHeader>
              <CardTitle className="flex justify-between gap-4 items-center">
                <div>{title}</div>
                <button
                  className="flex justify-items-end dark:text-white"
                  onClick={handleClose}
                >
                  <AiOutlineClose className="dark:text-gray-200" />
                </button>
              </CardTitle>
              <CardDescription>{description}</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={onSubmit}>
                <div className="grid w-full items-center gap-4">
                  {fields.map((input: inputProps) => (
                    <div className="flex flex-col space-y-1.5">
                      <Label htmlFor={input.id}>{input.label}</Label>
                      <Controller
                        name={input.id}
                        control={control}
                        rules={{
                          validate: (value) => isPatternValid(value, input.conditions?.pattern),
                        }}
                        render={({ field, fieldState }) => (
                          <div>
                            <div className="flex items-center">
                              <Input
                                className="flex-grow "
                                style={
                                  isRegister && field.value !== ""
                                    ? { maxWidth: "calc(100% - 40px)" }
                                    : {}
                                }
                                id={input.id}
                                type={input.type}
                                disabled={loading}
                                placeholder={input.placeholder}
                                {...field}
                                {...register(input.id, input.conditions)}
                                onChange={(e) => {
                                  field.onChange(e); // Ensure the field value updates
                                  onInputChange(input.id); // Trigger validation on input change
                                }}
                              />
                              {field.value !== "" &&
                                isRegister &&
                                (!fieldState.invalid ? (
                                  <div className="text-green-600 text-2xl ml-4">
                                    <AiOutlineCheckCircle />
                                  </div>
                                ) : (
                                  <div className="text-red-600 text-2xl ml-4">
                                    <BiError />
                                  </div>
                                ))}
                            </div>
                            {isRegister && input.type === "password" && field.value !== "" && (
                              <div className="mt-2">
                                <div className="text-sm">
                                  Strength: {calculatePasswordStrength(field.value)}
                                </div>
                                <div className="h-2 w-2/5 bg-white rounded-full relative mt-2 border ">
                                  <div
                                    className={`h-full rounded-full absolute transition-all duration-300 ${
                                      calculatePasswordStrength(field.value) === "Weak"
                                        ? "w-1/4 bg-red-500"
                                        : calculatePasswordStrength(field.value) === "Medium"
                                        ? "w-1/2 bg-yellow-500"
                                        : calculatePasswordStrength(field.value) === "Strong"
                                        ? "w-3/4 bg-green-800"
                                        : "w-full bg-green-500"
                                    }`}
                                  />
                                </div>
                              </div>
                            )}
                          </div>
                        )}
                      />
                    </div>
                  ))}
                </div>

                <Button
                  className="w-full mt-4 mb-4"
                  type="submit"
                >
                  {isRegister ? "Register" : "Login"}
                </Button>
              </form>

              <div>
                <SeparatorWithText text={isRegister ? "or login with" : "or"} />
                <div className="grid grid-cols-1 gap-6 mt-4">
                  <Button variant="outline">
                    <Icons.steam className="mr-2 h-4 w-4" />
                    <a href="http://localhost:5000/api/auth/steam">Steam</a>
                  </Button>
                </div>
                <CardDescription className="mt-4 text-center">
                  <p>
                    {isRegister ? "Already have an account?" : "Don't have an account?"}{" "}
                    <button>
                      <a
                        onClick={handleModalChange}
                        className="text-grey-500 underline hover:text-purple-400"
                      >
                        {isRegister ? "Login into your account" : "Create an account"}{" "}
                      </a>
                    </button>
                  </p>
                </CardDescription>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
};

export default Modal;
