
import NavSimple from "@/components/navSimple";
import React from "react";



export default function RechercheLayout({
                                            children,
                                        }: {
    children: React.ReactNode;
}) {
    return (
        <div>
            <NavSimple />
            {children}
        </div>
    );
}
