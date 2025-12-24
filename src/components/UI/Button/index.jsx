import { motion } from 'framer-motion';
import './Button.css';

export const Button = ({ children, onClick, variant = 'primary', className = '', style = {}, ...props }) => {
    const variantClass = `button-${variant}`;

    return (
        <motion.button
            className={`button ${variantClass} ${className}`}
            onClick={onClick}
            style={style}
            {...props}
        >
            {children}
        </motion.button>
    );
};
