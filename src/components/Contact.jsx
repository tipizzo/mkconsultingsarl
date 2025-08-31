import React from 'react'
import { useState } from 'react';

const Contact = () => {

    const web3access_key = import.meta.env.VITE_WEB3FORM_ACCESS_KEY

    const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("En cours d'envoi...");
    const formData = new FormData(event.target);

    formData.append("access_key", web3access_key);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("S"); 
      alert("Message Envoyé")
      event.target.reset();
    } else {
      console.log("Error", data);
      alert(data.message)
      setResult("");
    }
  };

    return (
        <div className='text-center p-6 py-20 lg:px-32 w-full overflow-hidden' id='Contact'>
            <h1 className='text-2xl sm:text-4xl font-bold mb-2 text-center'>Contactez-<span className='underline underline-offset-4 decoration-1 under font-light'>Nous</span></h1>
            <p className='text-center text-gray-500 mb-12 max-w-80 mx-auto'>Une question ou un projet à discuter ? Notre équipe est prête à vous écouter et à vous accompagner. Parlons de vos idées et donnons-leur vie ensemble.</p>

            <form onSubmit={onSubmit} className='max-w-2xl mx-auto text-gray-600 pt-8'>
                <div className='flex flex-wrap'>
                    <div className='w-full md:w-1/2 text-left'>
                        Nom & Post-nom
                        <input className='w-full border border-gray-300 rounded py-3 px-4 mt-2' type='text' name='Name' placeholder='John Doe' required/>
                    </div>
                    <div className='w-full md:w-1/2 text-left md:pl-4'>
                        Votre Addresse Mail
                        <input className='w-full border border-gray-300 rounded py-3 px-4 mt-2' type='email' name='Email' placeholder='johndoe@email.com' required/>
                    </div>
                </div>
                <div className='my-6 text-left'>
                    Message
                    <textarea className='w-full border border-gray-300 rounded py-3 px-4 mt-2 h-48 resize-none' name='Message' placeholder='Message' required></textarea>
                </div>
                <button className='bg-blue-600 text-white py-2 px-12 mb-10 rounded-md cursor-pointer'>{result ? result : "Envoyer"}</button>
            </form>
        </div>
    )
}

export default Contact