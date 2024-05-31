import { PropsWithChildren } from "react";
import LanguageProvider from "./LanguageProvider";

export default function MainProvider(props: PropsWithChildren) {
    return (
        <LanguageProvider>
            {props.children}
        </LanguageProvider>
    );
}