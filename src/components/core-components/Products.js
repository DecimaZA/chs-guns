import React from "react";

const Products = () => {
    return (
        <div style={{display: 'grid',  justifyContent:'center', alignItems:'center', height: '50vh', margin: '200px', padding: '50px'}}>
            <h1>Firearm brands that we stock</h1>
            <p>
            As far as firearms go, CHS is all about Glock Perfection, stocking a substantial range of available models, and of course the all-important 
            range of spare parts and components to keep your Glock operating at peak performance. In the event that we do not have something in stock, 
            we will place an order at your request and notify you of an ETA and arrival. 
            We of course also stock brands and models besides Glock, which includes the competitive alternative of CZ, the budget friendly options 
            from Taurus, the statement making of Sig Sauer, and the miscellaneous odd-bins that pass through our store from time to time. Availability 
            of spares in store is not always guaranteed, but we can contact the agents for whatever you need (if they exist, unless you can resurrect dead comapnies likeStar). 
            Please note that we will not sell you a firearm that cannot acquire spares in a reasonable time without first telling you that spares are 
            difficult to come by! Certain defunct and dead brands like Star obviously do not have agents, but there are entities and individuals that collect spares for resale.
            </p>
        </div>
    );
};

export default Products;