import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

function Form() {

  
  const form = useRef();
  const [formData, setFormData] = useState({
    
    title: '',
    firstName: '',
    lastName: '',
    dob: '',
    referer: '',
    vehicleRegistration: '',
    address: '',
    maritalStatus: '',
    number: '',
    email: '',
    occupationIndustry: '',
    periodLicenceHeld: '',
    vehiclePrice: '',
    purchaseDate: '',
    legalOwner: '',
    mileage: '',
    claimDiscount: '',
    licenseType: '',
    registeredKeeper: '',
    licensePassDate: '',
    claims: '',
    penalties: '',
    residentUk: '',
    whyUseCar: '',
    startDate: '',
    coverType: '',
    additionalDriver: '',

  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send form data to backend or handle as needed
    console.log(formData);

    emailjs
      .sendForm('service_45mzuur', 'template_kx6g0sy', form.current, {
        publicKey: 'rY5m7SAUF-eQqaCLI',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );


    setFormData({
      title: '',
    firstName: '',
    lastName: '',
    dob: '',
    referer: '',
    vehicleRegistration: '',
    address: '',
    maritalStatus: '',
    number: '',
    email: '',
    occupationIndustry: '',
    periodLicenceHeld: '',
    vehiclePrice: '',
    purchaseDate: '',
    legalOwner: '',
    mileage: '',
    claimDiscount: '',
    licenseType: '',
    registeredKeeper: '',
    licensePassDate: '',
    claims: '',
    penalties: '',
    residentUk: '',
    whyUseCar: '',
    startDate: '',
    coverType: '',
    additionalDriver: '',
    });
  };

  return (
    <div className='bg-slate-50  lg:pb-16 pb-8'>
      <p className='py-5 font-medium text-center mb-3 text-xl'>Please answer all the questions best of your knowledge</p>
      <form ref={form} onSubmit={handleSubmit} className="space-y-4 lg:w-[50%] w-[80%] mx-auto lg:px-6 px-4 py-3 rounded-md shadow-lg bg-white">

      <div>
          <label className="block">Title <span className='text-red-600 font-bold'>*</span></label>
          <input required type="text" name="title" value={formData.title} onChange={handleChange} className=" lg:w-[50%] py-1 border-b focus:outline-none focus:border-blue-500" />
        </div> 
        
        <div>
          <label className="block">First Name <span className='text-red-600 font-bold'>*</span></label>
          <input required type="text" name="firstName" value={formData.firstName} onChange={handleChange} className=" lg:w-[50%] py-1 border-b focus:outline-none focus:border-blue-500" />
        </div> 

        <div>
          <label className="block">Last Name <span className='text-red-600 font-bold'>*</span></label>
          <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} className="lg:w-[50%] py-1 border-b focus:outline-none focus:border-blue-500" />
        </div>

        <div>
          <label className="block">Full Address including Postcode <span className='text-red-600 font-bold'>*</span></label>
          <input required type="text" name="address" value={formData.address} onChange={handleChange} className="lg:w-[50%] py-1 border-b focus:outline-none focus:border-blue-500" />
        </div>

        <div>
          <label required className="block">Date of Birth <span className='text-red-600 font-bold'>*</span></label>
          <input type="text" name="dob" value={formData.dob} onChange={handleChange} className="mt-2 pb-2 border-b focus:outline-none " />
        </div>
        <div>
          <label className="block">Contact Number <span className='text-red-600 font-bold'>*</span></label>
          <input required type="number" name="number" value={formData.number} onChange={handleChange} className="lg:w-[50%] py-1 border-b focus:outline-none focus:border-blue-500" />
        </div> 

        <div>
          <label className="block">Email <span className='text-red-600 font-bold'>*</span></label>
          <input required type="email" name="email" value={formData.email} onChange={handleChange} className="lg:w-[50%] py-1 border-b focus:outline-none focus:border-blue-500" />
        </div>

        <div>
          <label className="block">Occupation & industry :</label>
          <input type="text" name="occupationIndustry" value={formData.occupationIndustry} onChange={handleChange} className="lg:w-[50%] py-1 border-b focus:outline-none focus:border-blue-500" />
        </div>
        
        <div>
          <label className="block">Name of Referer</label>
          <input type="text" name="referer" value={formData.referer} onChange={handleChange} className="lg:w-[50%] py-1 border-b focus:outline-none focus:border-blue-500" />
        </div>

        <div>
          <label className="block">Marital Status : <span className='text-red-600 font-bold'>*</span></label>
          <input required type="text" name="maritalStatus" value={formData.maritalStatus} onChange={handleChange} className="lg:w-[50%] py-1 border-b focus:outline-none focus:border-blue-500" />
        </div>

        <div>
          <label className="block">Licence Type :  <span className='text-red-600 font-bold'>*</span></label>
          <input required type="text" name="licenseType" value={formData.licenseType} onChange={handleChange} className="lg:w-[50%] py-1 border-b focus:outline-none focus:border-blue-500" />
        </div>

        <div>
          <label className="block">Period Licence Held :<span className='text-red-600 font-bold'>*</span></label>
          <input required type="text" name="periodLicenceHeld" value={formData.periodLicenceHeld} onChange={handleChange} className="lg:w-[50%] py-1 border-b focus:outline-none focus:border-blue-500" />
        </div>

        <div>
          <label className="block">Date licence obtained :<span className='text-red-600 font-bold'>*</span></label>
          <input required type="text" name="licensePassDate" value={formData.licensePassDate} onChange={handleChange} className="lg:w-[50%] py-1 border-b focus:outline-none focus:border-blue-500" />
        </div>

        <div>
          <label className="block">When did you become resident of the UK? <span className='text-red-600 font-bold'>*</span></label>
          <input required type="text" name="residentUk" value={formData.residentUk} onChange={handleChange} className="lg:w-[50%] py-1 border-b focus:outline-none focus:border-blue-500" />
        </div>

        <div>
          <label className="block">Any Claims? </label>
          <input type="text" name="claims" value={formData.claims} onChange={handleChange} className="lg:w-[50%] py-1 border-b focus:outline-none focus:border-blue-500" />
        </div>

        <div>
          <label className="block">Any convictions? </label>
          <input type="text" name="penalties" value={formData.penalties} onChange={handleChange} className="lg:w-[50%] py-1 border-b focus:outline-none focus:border-blue-500" />
        </div>

        <div>
          <label className="block">Vehicle Registration <span className='text-red-600 font-bold'>*</span></label>
          <input required type="text" name="vehicleRegistration" value={formData.vehicleRegistration} onChange={handleChange} className="lg:w-[50%] py-1 border-b focus:outline-none focus:border-blue-500" />
        </div>

        <div>
          <label className="block">Price of the Vehicle <span className='text-red-600 font-bold'>*</span></label>
          <input required type="text" name="vehiclePrice" value={formData.vehiclePrice} onChange={handleChange} className="lg:w-[50%] py-1 border-b focus:outline-none focus:border-blue-500" />
        </div>

        
        <div>
          <label className="block">When did you buy the car? <span className='text-red-600 font-bold'>*</span></label>
          <input required type="text" name="purchaseDate" value={formData.purchaseDate} onChange={handleChange} className="lg:w-[50%] py-1 border-b focus:outline-none focus:border-blue-500" />
        </div>

        <div>
          <label className="block">What do you use the car for? <span className='text-red-600 font-bold'>*</span></label>
          <input required type="text" name="whyUseCar" value={formData.whyUseCar} onChange={handleChange} className="lg:w-[50%] py-1 border-b focus:outline-none focus:border-blue-500" />
        </div>

        <div>
          <label className="block">Who is the legal owner & keeper of the car? <span className='text-red-600 font-bold'>*</span></label>
          <input required type="text" name="legalOwner" value={formData.legalOwner} onChange={handleChange} className="lg:w-[50%] py-1 border-b focus:outline-none focus:border-blue-500" />
        </div>

        <div>
          <label className="block">Who is the Registered Keeper? <span className='text-red-600 font-bold'>*</span></label>
          <input required type="text" name="registeredKeeper" value={formData.registeredKeeper} onChange={handleChange} className="lg:w-[50%] py-1 border-b focus:outline-none focus:border-blue-500" />
        </div>

        <div>
          <label className="block">Estimated Annual Mileage <span className='text-red-600 font-bold'>*</span></label>
          <input required type="text" name="mileage" value={formData.mileage} onChange={handleChange} className="lg:w-[50%] py-1 border-b focus:outline-none focus:border-blue-500" />
        </div>

        <div>
          <label className="block">Any no claim discount</label>
          <input type="text" name="claimDiscount" value={formData.claimDiscount} onChange={handleChange} className="lg:w-[50%] py-1 border-b focus:outline-none focus:border-blue-500" />
        </div>

        <div>
          <label className="block">What type of cover are you looking for?</label>
          <input type="text" name="coverType" value={formData.coverType} onChange={handleChange} className="lg:w-[50%] py-1 border-b focus:outline-none focus:border-blue-500" />
        </div>


        <div>
          <label className="block">When would you like to start the policy? <span className='text-red-600 font-bold'>*</span></label>
          <input required type="text" name="startDate" value={formData.startDate} onChange={handleChange} className="lg:w-[50%] py-1 border-b focus:outline-none focus:border-blue-500" />
        </div>

        <div>
          <label className="block">Would you like to add another additional driver? <span className='text-red-600 font-bold'>*</span></label>
          <input required type="text" name="additionalDriver" value={formData.additionalDriver} onChange={handleChange} className="lg:w-[50%] py-1 border-b focus:outline-none focus:border-blue-500" />
        </div>


        
        <button type="submit" value="Send" className=" bg-red-600 hover:bg-red-700 px-5 py-3 rounded-md text-white font-medium shadow-md">Submit</button>
      </form>
    </div>
  );
}

export default Form;