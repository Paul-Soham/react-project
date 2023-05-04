import React from 'react'

const MenuCard = ({menuData}) => {

//console.log(menuData);

    return (
    <>
        <section className="main-card--cointainer">
            {menuData.map((curElem) => {
                return(
                <>
                    <div className="card-container" key={curElem.id}>
                        <div className="card">
                            <div className="card-body">
                                <span className="card-number card-circle subtle">{curElem.id}</span>
                                <div className="card-author subtle">{curElem.category}</div>
                                <div className="card-title">{curElem.name}</div>
                                <span className="card-description subtle">{curElem.description}</span>
                                <div className="card-read">Read</div>
                            </div>
                            <img src={curElem.image} alt="" className="card-media" />
                            <span className="card-tag subtle">Order Now</span>
                        </div>
                    </div>
                </>
                )
            })}
        </section>
    </>
    )
}

export default MenuCard