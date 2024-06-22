import React from "react";
import "./index.css"

const DataFilter = ({filter, setFilter}) => {
    const handleChange = (event) =>{
        setFilter(event.target.value)
    }

    return(
        <div className="filter-container">
            <select value={filter} onChange={handleChange} className="filter-select">
                <option value="all">All News</option>
                <option value="week">Last Week News</option>
                <option value="month">Last Month News</option>
            </select>
        </div>
    )

}

export default DataFilter