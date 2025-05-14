import { useForm } from "react-hook-form";

type FormData = {
  email: string;
  password: string;
};

export const FormPage = () => {
  const { register, handleSubmit, formState, watch } = useForm<FormData>({
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const onSubmit = (data: FormData) => {
    console.log(data);
  }

  console.log("watch", watch("email"));
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h3>Formulario</h3>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <input
          type="text"
          placeholder="Ingrese su email"
          {...register("email", {
            required: "El email es requerido",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "El email no es válido",
            },
          })}
        />
        <input
          type="text"
          placeholder="Ingrese su password"
          {...register("password", { required: "El password es requerido" })}
        />
        <button type="submit" style={{ background: "#4CAF50", color: "white" }}>
          Login
        </button>
      </div>
      <pre>{JSON.stringify(formState, null, 2)}</pre>
    </form>
  );
};
