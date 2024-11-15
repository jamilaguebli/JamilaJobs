"use client";

import { Button } from "@/components/ui/button";
import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

const ScrollTop = () => {
    const [isvisible, setIsvisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setIsvisible(true);
            } else {
                setIsvisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);
        return () => {
            window.removeEventListener("scroll", toggleVisibility);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <div className="fixed animate-pulse bottom-4 right-4">
            {isvisible && (
                <Button
                    onClick={scrollToTop}
                    className="bg-blue-500 text-white rounded-full flex items-center justify-center w-12 h-12 focus:outline-none"
                >
                    <ArrowUp />
                </Button>
            )}
        </div>
    );
};

export default ScrollTop;
