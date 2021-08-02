import React, { HTMLAttributes } from "react";
import styled from "styled-components";

interface ButtonOptions {
    children?: React.ReactNode
    height: string;
    width: string;
    onClick: any;
    color: string;
}

type ButtonProps = HTMLAttributes<HTMLButtonElement> & ButtonOptions;

export const CustomButton = styled.button<ButtonProps>`
    height: ${(props) => props.height};
    width: ${(props) => props.width};
    background-color: ${(props) => props.color}
    font-family: Open Sans, sans serif;
    font.weight: bold;
    font-size: 15px;
    color: #fff;

    &:hover {
        cursor: pointer;
        background-color: rgba(206, 124, 6, 255);
      }
    
      &:focus {
        border: 2px solid rgba(66, 71, 93, 255);
      }
`;

const Button: React.FC<ButtonProps> = ({
    color,
    children,
    height,
    width,
    onClick,
    className = "",
}) => {
    return (
        <CustomButton
            onClick={onClick}
            height={height}
            color={color}
            width={width}
            className={className}
        >
            {children}
        </CustomButton>
    )
}

