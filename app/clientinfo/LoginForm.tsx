"use client";

import { FormEvent, useState } from "react";
import styles from "./clientinfo.module.css";

export default function LoginForm() {
  const [password, setPassword] =
    useState("");

  const [error, setError] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  async function login(
    event: FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();

    setLoading(true);
    setError("");

    const response = await fetch(
      "/clientinfo/api/auth/login",
      {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          password,
        }),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      setError(
        data.error || "Login failed"
      );

      setLoading(false);
      return;
    }

    window.location.reload();
  }

  return (
    <main className={styles.loginPage}>
      <form
        className={styles.loginCard}
        onSubmit={login}
      >
        <div
          className={styles.loginEyebrow}
        >
          NEURON INNOVATIONS
        </div>

        <h1>Ad Route</h1>

        <p>
          Secure administration interface.
        </p>

        <label>
          Administrator Password
        </label>

        <input
          type="password"
          value={password}
          onChange={(event) =>
            setPassword(
              event.target.value
            )
          }
          autoFocus
          required
        />

        {error && (
          <div
            className={styles.error}
          >
            {error}
          </div>
        )}

        <button
          type="submit"
          disabled={loading}
        >
          {loading
            ? "Signing in..."
            : "Sign In"}
        </button>
      </form>
    </main>
  );
}