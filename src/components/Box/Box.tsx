import { FC, HTMLAttributes } from "react";
import styled from "styled-components"

interface BoxOptions extends HTMLAttributes<HTMLDivElement> {
    children: any;
    margin?: string;
    padding?: string;
    className?: string;
}

const CustomDiv = styled.div<BoxOptions>`
    margin: ${(props) => props.margin};
    padding: ${(props) => props.padding};
`

export const Box: FC<BoxOptions> = ({
    children,
    margin = "auto",
    padding = "auto",
    className = "",
}) => (
    <CustomDiv
        className={className}
        margin={margin}
        padding={padding}
    >
        {children}
    </CustomDiv>
);