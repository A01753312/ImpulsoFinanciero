import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function QuoteForm() {
  return (
    <Link to="/cotiza">
      <Button className="bg-[#0F172A] hover:bg-[#0b1220] text-white rounded-full px-6 py-2 font-semibold">
        Cotiza ya
      </Button>
    </Link>
  );
}
