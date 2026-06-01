import { motion } from "framer-motion";

import { X } from "lucide-react";

import { Button } from "@/components/ui/button";

interface Props {
  title: string;
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export default function AzureBlade({
  title,
  open,
  onClose,
  children
}: Props) {
  if (!open) return null;

  return (
    <motion.div
      initial={{ x: 500 }}
      animate={{ x: 0 }}
      exit={{ x: 500 }}
      className="w-[520px] bg-white border-l border-slate-200 shadow-2xl"
    >
      <div className="h-16 border-b border-slate-200 flex items-center justify-between px-6">
        <h2 className="font-semibold">
          {title}
        </h2>

        <Button
          variant="ghost"
          onClick={onClose}
        >
          <X size={16} />
        </Button>
      </div>

      <div className="p-6 overflow-auto h-[calc(100vh-64px)]">
        {children}
      </div>
    </motion.div>
  );
}