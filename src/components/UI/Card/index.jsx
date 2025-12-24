import './Card.css';

export const Card = ({ children, className = '', hoverEffect = false, style = {} }) => {
    return (
        <div
            className={`card ${hoverEffect ? 'card-hover' : ''} ${className}`}
            style={style}
        >
            {children}
        </div>
    );
};