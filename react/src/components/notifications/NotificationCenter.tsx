import { Bell } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function NotificationCenter() {
  return (
    <Button
      variant="outline"
      className="relative"
    >
      <Bell size={16} />

      <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] rounded-full h-4 w-4 flex items-center justify-center">
        3
      </span>
    </Button>
  );
}