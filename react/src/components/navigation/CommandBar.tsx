import {
  Bell,
  Search,
  Plus
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function CommandBar() {
  return (
    <div className="h-16 bg-white border-b border-slate-200 px-6 flex items-center justify-between">
      <div className="relative w-96">
        <Search
          size={16}
          className="absolute left-3 top-3.5 text-slate-400"
        />

        <Input
          placeholder="Search resources..."
          className="pl-9"
        />
      </div>

      <div className="flex items-center gap-3">
        <Button>
          <Plus size={16} />
          New Deployment
        </Button>

        <Button variant="outline">
          <Bell size={16} />
        </Button>
      </div>
    </div>
  );
}