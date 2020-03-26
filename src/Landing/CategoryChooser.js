import React from 'react';



const CategoryPicker = ({ categories }) => {
    
    const styles = {
        container: {
            fontWeight: 250,
            fontSize: "14pt"
        },
        category: {
            marginBottom: "8px",
            width: "80px",
            textAlign: "left",
            fontWeight: 600
        }
    }

    return <div style={styles.container}>
        {
            categories.map(category => <div style={styles.category}>{ category }</div>)
        }
    </div>
};

export default CategoryPicker;