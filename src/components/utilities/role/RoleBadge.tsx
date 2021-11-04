import React from "react";

interface Props {
    name: string;
}

const RoleBadge = (props: Props) => {
    const badgeColor = () => {
        switch (props.name) {
            case "admin":
            case "Admin":
                return "badge-danger";
            case "moderator":
            case "Moderator":
                return "badge-warning";
            default:
                return "badge-default";
        }
    };
    return (
        <div className={`badge ${badgeColor()}`}>{props.name ?? "No role"}</div>
    );
};

export default RoleBadge;
