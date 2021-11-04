import React, { useEffect } from "react";

interface Props {}

const BreadCrumbAddBtn = (props: Props) => {
    useEffect(() => {
        document.getElementById("breadCrumbAddBtn")?.classList.remove("hidden");
        return () => {
            document
                .getElementById("breadCrumbAddBtn")
                ?.classList.add("hidden");
        };
    });
    return <></>;
};

export default BreadCrumbAddBtn;
