"use server";

export interface AuthFormState {
  message: string | null;
  success?: boolean;
  errors?: Record<string, string[]>;
}

export async function registerUser(
  _: AuthFormState,
  formData: FormData,
): Promise<AuthFormState> {
  if (formData) {
    const name = formData.get("name");
    const email = formData.get("email");
    const password = formData.get("password");

    // Simulate registration logic (e.g., save to database)
    console.log("Registering user:", { name, email, password });

    // Here you would typically handle the registration logic,
    // such as validating the input, saving the user to a database,
    // and returning appropriate success or error messages.
  }
  return {
    message: "Registration successful!",
    success: true,
  };
}
