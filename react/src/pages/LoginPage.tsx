import { useNavigate } from "react-router-dom";
import { useState } from "react";

import { motion } from "framer-motion";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function LoginPage() {
  const navigate = useNavigate();

  const [loading, setLoading] =
    useState(false);

  async function login() {
    setLoading(true);

    await new Promise((resolve) =>
      setTimeout(resolve, 1500)
    );

    toast.success(
      "Successfully signed in"
    );

    navigate("/portal");

    setLoading(false);
  }

  return (
    <div className="h-screen bg-slate-100 flex items-center justify-center">
      <motion.div
        initial={{
          opacity: 0,
          y: 30
        }}
        animate={{
          opacity: 1,
          y: 0
        }}
        className="bg-white rounded-3xl p-10 shadow-xl w-[460px]"
      >
        <div className="mb-8">
          <div className="w-12 h-12 rounded-xl bg-[#0078D4]" />

          <h1 className="text-3xl font-semibold mt-4">
            Azure Flink Platform
          </h1>

          <p className="text-slate-500 mt-2">
            Enterprise Streaming
            Management
          </p>
        </div>

        <div className="space-y-4">
          <Input placeholder="Username" />
          <Input
            type="password"
            placeholder="Password"
          />

          <Button
            className="w-full"
            disabled={loading}
            onClick={login}
          >
            {loading
              ? "Signing In..."
              : "Sign In"}
          </Button>
        </div>
      </motion.div>
    </div>
  );
}