import React from 'react'
import PropTypes from 'prop-types'
import Item from './Item'

function Listing({items}) {

    if (items.length) {
        items = items.filter((item) => item.state === "active");
    

    return (
     <div className="item-list">
        {items.map(el => 
          <Item item={el} key={el.listing_id} />
        )}
    </div>
    )
  }
}

Listing.propTypes = {
    items: PropTypes.array.isRequired,
}

Listing.defaultProps = {
    items: [],
}

export default Listing
