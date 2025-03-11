import React from 'react';

interface SiButtonProps {
    children?: React.ReactNode;
    onClick?: () => void;
}
declare const SiButton: React.FC<SiButtonProps>;

export { SiButton as Button };
