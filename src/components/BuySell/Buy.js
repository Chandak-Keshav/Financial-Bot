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
                    <div>
                    Buy
                    </div>
                    <div>
                    Sell
                    </div>
            <div>
          <form onSubmit={handleSubmit}>
            <div className="form-control">
              <input
                type="text"
                name="candidate"
                placeholder="Search Candidate"
                value={state.candidate}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-control">
              <input
                type="text"
                name="price"
                placeholder="Put a Price"
                value={state.price}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-control">
              <input
                type="text"
                name="sales"
                placeholder="Percentage of sales"
                value={state.sales}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-control">
              <label></label>
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
        </div>
      )
}

export default Buy