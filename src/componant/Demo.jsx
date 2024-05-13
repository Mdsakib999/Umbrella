// import React, { useRef, useState } from 'react';
// import emailjs from '@emailjs/browser';

// function Form() {
//   const form = useRef();
//   const [formData, setFormData] = useState({
    
//     firstName: '',
//     lastName: '',
//     dob: '',
//     referer: '',
//     postcode: '',
//     vehicleRegistration: '',
//     address: '',
//     maritalStatus: '',
//     employmentStatus: '',
//     number: '',
//     email: '',
//     vehiclePrice: '',
//     purchaseDate: '',
//     legalOwner: '',
//     ncb: '',
//     ncbYear: '',
//     licenseType: '',
//     licensePassDate: '',
//     claims: '',
//     penalties: '',
//     residentUk: '',
//     whyUseCar: '',
//     startDate: '',
//     coverType: '',
//     hearAboutUs: '',

//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prevState => ({
//       ...prevState,
//       [name]: value
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Send form data to backend or handle as needed
//     console.log(formData);

//     emailjs
//       .sendForm('service_45mzuur', 'template_kx6g0sy', form.current, {
//         publicKey: 'rY5m7SAUF-eQqaCLI',
//       })
//       .then(
//         () => {
//           console.log('SUCCESS!');
//         },
//         (error) => {
//           console.log('FAILED...', error.text);
//         },
//       );

//     setFormData({
//       referer: '',
//       firstName: '',
//       lastName: '',
//       dob: '',
//       postcode: '',
//       address: '',
//       maritalStatus: '',
//       employmentStatus: '',
//       number: '',
//       email: '',
//       vehiclePrice: '',
//       purchaseDate: '',
//       option: '',
//       hearAboutUs: '',
//     });
//   };

//   return (
//     <form ref={form} onSubmit={handleSubmit} className="space-y-4 lg:w-[50%] w-[80%] mx-auto">
        
//         <div>
//           <label className="block">First Name</label>
//           <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} className=" lg:w-[50%] py-1 border-b focus:outline-none focus:border-blue-500" />
//         </div>
//         <div>
//           <label className="block">Last Name</label>
//           <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} className="lg:w-[50%] py-1 border-b focus:outline-none focus:border-blue-500" />
//         </div>
//         <div>
//           <label className="block">Date of Birth</label>
//           <input type="date" name="dob" value={formData.dob} onChange={handleChange} className="mt-2 pb-2 border-b focus:outline-none " />
//         </div>
//         <div>
//           <label className="block">Contact Number</label>
//           <input type="number" name="number" value={formData.number} onChange={handleChange} className="lg:w-[50%] py-1 border-b focus:outline-none focus:border-blue-500" />
//         </div> 
//         <div>
//           <label className="block">Email</label>
//           <input type="email" name="email" value={formData.email} onChange={handleChange} className="lg:w-[50%] py-1 border-b focus:outline-none focus:border-blue-500" />
//         </div>
//         <div>
//           <label className="block">Postcode</label>
//           <input type="text" name="postcode" value={formData.postcode} onChange={handleChange} className="lg:w-[50%] py-1 border-b focus:outline-none focus:border-blue-500" />
//         </div>
//         <div>
//           <label className="block">Address</label>
//           <input type="text" name="address" value={formData.address} onChange={handleChange} className="lg:w-[50%] py-1 border-b focus:outline-none focus:border-blue-500" />
//         </div>
//         <div>
//           <label className="block">Name of Referer</label>
//           <input type="text" name="referer" value={formData.referer} onChange={handleChange} className="lg:w-[50%] py-1 border-b focus:outline-none focus:border-blue-500" />
//         </div>
//         <div>
//           <label className="block">Marital Status</label>
//           <div className="flex mt-2">
//             <label className="mr-5">
//               <input type="radio" name="maritalStatus" value="Single" onChange={handleChange} className="mr-1" />
//               Single
//             </label>
//             <label>
//               <input type="radio" name="maritalStatus" value="Married" onChange={handleChange} className="mr-1" />
//               Married
//             </label>
//           </div>
//         </div>
//         <div>
//           <label className="block">Employment Status</label>
//           <div className="flex">
//             <label className="mr-2">
//               <input type="radio" name="employmentStatus" value="Employed" onChange={handleChange} className="mr-1" />
//               Employed
//             </label>
//             <label>
//               <input type="radio" name="employmentStatus" value="Unemployed" onChange={handleChange} className="mr-1" />
//               Unemployed
//             </label>
//           </div>
//         </div>
//         <div>
//           <label className="block">Vehicle Registration</label>
//           <input type="text" name="vehicleRegistration" value={formData.vehicleRegistration} onChange={handleChange} className="lg:w-[50%] py-1 border-b focus:outline-none focus:border-blue-500" />
//         </div>
        
//         <div>
//           <label className="block">Price of the Vehicle</label>
//           <input type="number" name="vehiclePrice" value={formData.vehiclePrice} onChange={handleChange} className="lg:w-[50%] py-1 border-b focus:outline-none focus:border-blue-500" />
//         </div>

//         <div>
//           <label className="block">When did you buy the car?</label>
//           <input type="date" name="purchaseDate" value={formData.purchaseDate} onChange={handleChange} className="input" />
//         </div>

//         <div>
//           <label className="block">Who is the legal owner & keeper of the car?</label>
//           <select name="legalOwner" value={formData.legalOwner} onChange={handleChange} className="input">
//             <option value="Myself">Myself</option>
//             <option value="Parent">Parent</option>
//             <option value="Brother / Sister">Brother / Sister</option>
//             <option value="Family Member">Family Member</option>
//             <option value="Company">Company</option>
//             <option value="Other">Other</option>
//           </select>
//         </div>

//         <div>
//           <label className="block">Do you have any No Claim Bonus (NCB) on this car?</label>
//           <div className="flex">
//             <label className="mr-2">
//               <input type="radio" name="ncb" value="No" onChange={handleChange} className="mr-1" />
//               No
//             </label>
//             <label>
//               <input type="radio" name="ncb" value="Yes" onChange={handleChange} className="mr-1" />
//               Yes
//             </label>
//           </div>
//         </div>

//         <div>
//           <label className="block">if Yes, how many years of NCB you hav?</label>
//           <input type="number" name="ncbYear" value={formData.ncbYear} onChange={handleChange} className="input" />
//         </div>

//         <div>
//           <label className="block">What type of license you holding currently?</label>
//           <select required name="licenseType" value={formData.licenseType} onChange={handleChange} className="input">
//             <option value="Full UK Manual">Full UK Manual</option>
//             <option value="Full UK Auto">Full UK Auto</option>
//             <option value="Provisional UK/L">Provisional UK/L</option>
//             <option value="Full EEC/European License">Full EEC/European License</option>
//             <option value="International License">International License</option>
//           </select>
//         </div>

//         <div>
//           <label className="block">When did you pass your current license?</label>
//           <input type="date" name="licensePassDate" value={formData.licensePassDate} onChange={handleChange} className="input" />
//         </div>

//         <div>
//           <label className="block">In past 5 years, do you have any accident / claims / incidents (Fault / Non-fault / Not-Settled)?</label>
//           <select required name="claims" value={formData.claims} onChange={handleChange} className="input">
//             <option value="No">No</option>
//             <option value="Yes (1 claim)">Yes (1 claim)</option>
//             <option value="Yes (1 claim)">Yes (2 claim)</option>
//             <option value="Yes (2+ claim)">Yes (2+ claim)</option>
//           </select>
//         </div>

//         <div>
//           <label className="block">In past 5 years, do you have any points/convictions/penalties?</label>
//           <select required name="penalties" value={formData.penalties} onChange={handleChange} className="input">
//             <option value="No">No</option>
//             <option value="Yes">Yes</option>
//             <option value="Third Choice">Third Choice</option>
//           </select>
//         </div>

//         <div>
//           <label className="block">When did you become resident of the UK? (Please type "Born" if you were born in UK)</label>
//           <input type="text" name="residentUk" value={formData.residentUk} onChange={handleChange} className="input" />
//         </div>

//         <div>
//           <label className="block">What do you use the car for?</label>
//           <select required name="whyUseCar" value={formData.whyUseCar} onChange={handleChange} className="input">
//             <option value="Social & pleasure only">Social & pleasure only</option>
//             <option value="Second, Domestic, Pleasure & Commuting">Second, Domestic, Pleasure & Commuting</option>
//             <option value="Business Use">Business Use</option>
//             <option value="Food Delivery">Food Delivery</option>
//             <option value="Amazon Courier Delivery">Amazon Courier Delivery</option>
//           </select>
//         </div>

//         <div>
//           <label className="block">What type of cover are you looking for?</label>
//           <select required name="coverType" value={formData.coverType} onChange={handleChange} className="input">
//             <option value="Comprehensive">Comprehensive</option>
//             <option value="Third Party Only">Third Party Only</option>
//             <option value="Third Party Fire & Theft">Third Party Fire & Theft</option>
//           </select>
//         </div>

//         <div>
//           <label className="block">When would you like to start the policy? </label>
//           <input type="date" name="startDate" value={formData.startDate} onChange={handleChange} className="input" />
//         </div>

//         <div>
//           <label className="block">How did you hear about us?</label>
//           <div className="flex flex-col mt-2">
//             <label className="mr-2">
//               <input type="radio" name="hearAboutUs" value="Existing Customers" onChange={handleChange} className="mr-1" />
//               Existing Customers
//             </label>
//             <label>
//               <input type="radio" name="hearAboutUs" value="Friends & Family" onChange={handleChange} className="mr-1" />
//               Friends & Family
//             </label>
//             <label>
//               <input type="radio" name="hearAboutUs" value="Social Sites" onChange={handleChange} className="mr-1" />
//               Social Sites
//             </label>
//             <label>
//               <input type="radio" name="hearAboutUs" value="Leaflet" onChange={handleChange} className="mr-1" />
//               Leaflet
//             </label>
//           </div>
//         </div>

        
//         <button type="submit" value="Send" className="btn">Submit</button>
//       </form>
//   );
// }

// export default Form;




import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const QuitForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

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
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
  );
};

export default QuitForm;
