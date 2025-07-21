import React, { useState } from 'react';
import styles from './Accordion.module.css';

const Accordion = ({ title, children, startOpen = false }) => {
    const [isOpen, setIsOpen] = useState(startOpen);
    
    return (
        <div className={styles.accordionItem}>
            <button className={styles.accordionHeader} onClick={() => setIsOpen(!isOpen)}>
                <span>{title}</span>
                {/* <ChevronDownIcon rotation={isOpen ? 180 : 0} /> */}
            </button>
            {isOpen && <div className={styles.accordionContent}>{children}</div>}
        </div>
    );
};

export default Accordion;