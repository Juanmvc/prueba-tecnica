import { FC } from "react";
import styled from "styled-components"

interface TextOptions {
    fontSize?: string,
    /**
     * @default normal
     */
    weight?: "normal" | "light" | "bold";
    /**
     * @default left
     */
    textAlign?: "left" | "center" | "right";
    className?: string;
}

const CustomText = styled.p<TextOptions>`
    font-family: Open Sans, sans-serif;
    font-size: ${(props) => props.fontSize};
    font-weight: ${(props) => props.weight};
    textAlign: ${(props) => props.textAlign}
`

export const Text: FC<TextOptions> = ({
    children,
    fontSize = "18px",
    weight,
    textAlign,
    className = ""
}) => (
    <CustomText
        fontSize={fontSize}
        weight={weight}
        textAlign={textAlign}
        className={className}
    >
        {children}
    </CustomText>
);