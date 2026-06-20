"use server";

import { auth } from "@/lib/auth";

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
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    // Simulate registration logic (e.g., save to database)
    // console.log("Registering user:", { name, email, password });

    if (!name || name === "") {
      return {
        message: null,
        errors: {
          name: ["Name is required."],
        },
      };
    }

    if (!email || email === "") {
      return {
        message: null,
        errors: {
          email: ["Email is required."],
        },
      };
    }

    if (!password || password === "") {
      return {
        message: null,
        errors: {
          password: ["Password is required."],
        },
      };
    }

    try {
      const response = await auth.api.signUpEmail({
        body: { name, email, password },
      });

      console.log("Registration response:", response);

      return {
        message: "User registration successful!",
        success: true,
        errors: {},
      };
    } catch (error) {
      console.log("Registration failed", error);
      return {
        message: "User registration failed!",
        success: false,
        errors: {
          general: ["An error occurred during registration. Please try again."],
        },
      };
    }
  } else {
    return {
      message: null,
      success: false,
      errors: {
        general: ["No data received. Please fill out the form and try again."],
      },
    };
  }
}

export async function loginUser(
  _: AuthFormState,
  formData: FormData,
): Promise<AuthFormState> {
  if (formData) {
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    if (!email || email === "") {
      return {
        message: null,
        errors: {
          email: ["Email is required."],
        },
      };
    }

    if (!password || password === "") {
      return {
        message: null,
        errors: {
          password: ["Password is required."],
        },
      };
    }

    try {
      const response = await auth.api.signInEmail({
        body: { email, password, rememberMe: true },
      });

      console.log("Login response:", response);

      return {
        message: "User login successful!",
        success: true,
        errors: {},
      };
    } catch (error) {
      console.log("Login failed", error);
      return {
        message: "User login failed!",
        success: false,
        errors: {
          general: ["An error occurred during login. Please try again."],
        },
      };
    }
  } else {
    return {
      message: null,
      success: false,
      errors: {
        general: ["No data received. Please fill out the form and try again."],
      },
    };
  }
}
