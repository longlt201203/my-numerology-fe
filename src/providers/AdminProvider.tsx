import { PropsWithChildren } from "react";

export default function AdminProvider(props: PropsWithChildren) {
    return (
        <>
            {props.children}
        </>
    );
}