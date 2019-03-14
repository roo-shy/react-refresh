import React, {Component} from 'react';

class Form extends Component {
    constructor(props) {
        super(props);

        this.initialState = {
            first: '',
            last: '',
            company: '',
            email: '',
            phone: ''

        };

        this.state = this.initialState;
    }

    handleChange = event => {
        const { name, value } = event.target;

        this.setState({
            [name] : value
        });
    }

    submitForm = () => {
        this.props.handleSubmit(this.state);
        this.setState(this.initialState);
    }

render() {
       const { first, last, company, email, phone } = this.state;

       return (
           <form onSubmit={this.onFormSubmit}>
               <label>First</label>
               <input
                   type="text"
                   name="first"
                   value={first}
                   onChange={this.handleChange} />
               <label>Last</label>
               <input
                   type="text"
                   name="last"
                   value={last}
                   onChange={this.handleChange} />
              <label>Company</label>
               <input
                   type="text"
                   name="company"
                   value={company}
                   onChange={this.handleChange} />
              <label>Email</label>
               <input
                   type="text"
                   name="email"
                   value={email}
                   onChange={this.handleChange} />
               <label>Phone</label>
                <input
                    type="text"
                    name="phone"
                    value={phone}
                    onChange={this.handleChange} />
               <input
                  type="button"
                  value="Submit"
                  onClick={this.submitForm} />
           </form>
       );
   }
}

export default Form;