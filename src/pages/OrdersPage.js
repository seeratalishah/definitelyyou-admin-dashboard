import React from 'react';
import DropDownMenu from 'material-ui/DropDownMenu';

function OrdersPage() {
  return (
    <div>
      <h2>All Orders</h2>
      <DropDownMenu 
          value={this.state.selection} 
          onChange={this.handleChange}   
         >
          <MenuItem value={1} primaryText="English"  />
          <MenuItem value={2} primaryText="Spanish" />
          <MenuItem value={3} primaryText="French" />

        </DropDownMenu>
    </div>
    
    
  )
}

export default OrdersPage;