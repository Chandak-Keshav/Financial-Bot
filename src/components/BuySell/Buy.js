import React, { useState } from 'react'
import './Buy.scss';

const Buy = () => {

    const [option,setOption] = useState();
    const [state, setState] = useState({
        candidate: "",
        price: "",
        sales: ""
      });
    
      const handleInputChange = (event) => {
        const { name, value } = event.target;
        setState((prevProps) => ({
          ...prevProps,
          [name]: value
        }));
      };
    
      const handleSubmit = (event) => {
        event.preventDefault();
        console.log(state);
      };

      return (
            <div className='align-right'>
                    <div className='buy_entity'>
                    <span class="logo"></span>
                    <span class="text">Buy</span>
                    </div>
                    <div className='buy_entity'>
                    <span class="logo_sell"></span>
                    <span class="text">Sell</span>
                    </div>
            <div className='entity'>
            <div className='gap'></div>
          <form onSubmit={handleSubmit}>
            <div className="form-control">
            <span class="logo_person"></span>
              <input
                type="text"
                name="candidate"
                placeholder="Search Candidate"
                value={state.candidate}
                onChange={handleInputChange}
                className='textbox'
              />
            </div>
            <div className='gap'></div>
            <div className="form-control">
            <span class="logo_dollar"></span>
              <input
                type="text"
                name="price"
                placeholder="Put a Price"
                value={state.price}
                onChange={handleInputChange}
                className='textbox'
              />
            </div>
            <div className='gap'></div>
            <div className="form-control">
            <span class="logo_percent"></span>
              <input
                type="text"
                name="sales"
                placeholder="Percentage of sales"
                value={state.sales}
                onChange={handleInputChange}
                className='textbox'
              />
            </div>
            <div className='gap'></div>
            <div className="form-control">
              <label></label>
              <button type="submit" className='button'>Submit</button>
            </div>
          </form>
        </div>
        </div>
      )
}

export default Buy