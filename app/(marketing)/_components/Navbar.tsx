"use client";

import { useScrollTop } from "@/hooks/use-scroll-top";
import { cn } from "@/lib/utils";
import { Logo } from "./logo";
import { ModeToggle } from "@/components/modal-toggle";
import { useConvexAuth } from "convex/react";
import { SignUpButton } from "@clerk/clerk-react";
import { Button } from "@/components/ui/button";

export const Navbar = ({}) => {
  const { isAuthenticated, isLoading } = useConvexAuth();
  const scrolled = useScrollTop();
  return (
    <div
      className={cn(
        "z-50 bg-background fixed dark:bg-[#1F1f1f] top-0 flex items-center w-full p-6",
        scrolled && "border-b shadow-sm",
      )}
    >
      <Logo />
      <div className="md:ml-auto md:justify-end justify-between w-full flex items-center gap-x-2">
        {isLoading && <p>Loading...</p>}
        {!isAuthenticated && !isLoading && (
          <>
            <SignUpButton mode="modal">
              <Button variant="ghost" size="sm">
                Log in
              </Button>
            </SignUpButton>
            <SignUpButton mode="modal">
              <Button size="sm">Get Jotion free</Button>
            </SignUpButton>
          </>
        )}
        <ModeToggle />
      </div>
    </div>
  );
};
