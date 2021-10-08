import React from 'react';

import Joi from "joi-browser";
import emailjs from 'emailjs-com';

class Contact extends React.Component {

  state = {
    data : {first:"" , last:"" , email:"" , message:""},
    errors: []
  }
    
  schema = {
    first: Joi.string().required().label("First name"),
    last: Joi.string().required().label("Last name"),
    email: Joi.string().email().required().label("Email"),
    message: Joi.string().required().label("Message")   
  };
  
  handleSubmit = e => {
    e.preventDefault();
  
    const errors = this.validate();
    this.setState({errors : errors || {}});
    if(errors) return;

    this.sendEmail(e.target)
  }

  sendEmail(targetForm){
    emailjs.sendForm('service_jf59ghy', 'template_l8tgv4b', targetForm, 'user_ZuKLkCW4WWO1NG03AEPX8')
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
    targetForm.reset()
  }

  validate = () =>{
    const options = {abortEarly : false};
    const {error} = Joi.validate(this.state.data , this.schema , options );
    if(!error) return null;

    const errors = {};
    for (let item of error.details) errors[item.path[0]] = item.message;
    return errors;
  }

  handleChange = ({currentTarget:input}) => {
    const errors = {...this.state.errors}
    const errorMessage = this.validateProperty(input);
    if(errorMessage) errors[input.name] = errorMessage;
    else delete errors[input.name];

    const data = {...this.state.data};
    data[input.name] = input.value;

    this.setState({data , errors})
    console.log(this.state.errors)
  }

  validateProperty = ({name , value}) => {
    const obj = { [name] : value};
    const schema = { [name] : this.schema[name] };
    const {error} = Joi.validate( obj , schema );
    return error ? error.details[0].message : null;
  }

  getFirstError(){
    const errors = this.state.errors
    if(errors.first)return errors.first;
    if(errors.last)return errors.last;
    if(errors.email)return errors.email;
    if(errors.message)return errors.message;
  }
  
  render() { 
        return (
            <div className = "flex flex-column justify-center">
            <form onSubmit = {this.handleSubmit} className="w-full max-w-lg m-2 p-4 bg-gray-900 shadow rounded-lg">
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <label className="block uppercase tracking-normal text-white text-xs font-bold mb-2" htmlFor="grid-first-name" >
                    First Name
                  </label>
                  <input className="shadow appearance-none block w-full bg-white text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" 
                    id="grid-first-name" 
                    type="text" 
                    placeholder="Jane" 
                    onChange = {this.handleChange}
                    value = {this.state.first}
                    name = "first"/>
                </div>
                <div className="w-full md:w-1/2 px-3">
                  <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" htmlFor="grid-last-name">
                    Last Name

                  </label>
                  <input className="shadow appearance-none block w-full bg-white text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
                    id="grid-last-name" 
                    type="text" 
                    placeholder="Doe" 
                    onChange = {this.handleChange}
                    value = {this.state.last}
                    name = "last"/>
                    
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                  <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" htmlFor="grid-password">
                    E-mail
                  </label>
                  <input className="shadow appearance-none block w-full bg-white text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
                    id="email" 
                    type="email" 
                    onChange = {this.handleChange}
                    value = {this.state.email}
                    name = "email"/>

                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                  <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" htmlFor="grid-password">
                    Message
                  </label>
                  <textarea className="shadow resize-y appearance-none block w-full bg-white text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-32 resize-none" 
                    id="message" 
                    onChange = {this.handleChange}
                    value = {this.state.message}
                    name = "message"></textarea>

                  <p className="text-red-500 text-xs italic">{this.getFirstError()}</p>
                </div>
              </div>
              <div className="md:flex md:items-center">
                <div className="md:w-1/3">
                  <button className="transition bg-green-500 hover:bg-green-600 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 shadow rounded" >
                    Send
                  </button>
                </div>
                <div className="md:w-2/3"></div>
              </div>
            </form>
            </div>
        )
    }
}
 
export default Contact;