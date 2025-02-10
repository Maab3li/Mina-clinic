import React, { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import { Alert, Button, Collapse} from '@mui/material'
import { Country, State, City } from "country-state-city"


function AppointmentForm () {

    const {register,reset, handleSubmit ,clearErrors ,formState: {errors,isSubmitting, isSubmitSuccessful}} = useForm({
        mode:'onChange'
    })

    console.log({isSubmitting, isSubmitSuccessful})

    const [displayed, setDisplayed] = useState(true)

    const [countries, setCountries] = useState(Country.getAllCountries())
    const [states, setStates] = useState([])
    const [cities, setCities] = useState([])

    const [selectedCountry, setSelectedCountry] = useState(null)
    const [selectedState, setSelectedState] = useState(null)

    const handleCountryChange= (country) => {
        setSelectedCountry(country);
        setStates(State.getStatesOfCountry(country.isoCode));
        clearErrors('country')
        setCities([])
    }

    const handleStateChange = (state) => {
        setSelectedState(state);
        clearErrors('state')
        setCities(City.getCitiesOfState(selectedCountry.isoCode,state.isoCode))
    }

    return (
        <form onSubmit={handleSubmit((data) => {
            console.log(data);
        })}>
            <div class="min-h-screen p-6 mt-0 bg-gray-50 flex items-center justify-center ">
            <div class="container max-w-screen-lg mx-auto">
                <div>
                <div class="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6 md:w-full mx-auto">
                    <div class="grid gap-5 gap-y-2 text-sm grid-cols-1">
                    <div className="text-gray-800 pb-2">
                        <p class="font-medium text-lg">Appointment Form</p>
                        <p>Please fill out all the fields.</p>
                    </div>

                    <div class="lg:col-span-2">
                        <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                        <div class="md:col-span-2">
                            <label className="font-bold text-gray-800" htmlFor="first_name">First Name</label>
                            <input maxLength={15} {...register('first_name', { required: 'This field is required', maxLength: {value:15,message:'max length reached'},minLength:{value:2, message:'the name is too short'}})} type="text" name="first_name" id="first_name" class="h-10 border mt-1 rounded px-4 w-full bg-gray-100"  />
                            {errors.first_name?<div className="bg-red-300 text-red-900 font-bold py-2 px-2 mt-2">{errors.first_name?.message}</div> : null}
                            
                        </div>
                        <div class="md:col-span-3">
                            <label className="font-bold text-gray-800" htmlFor="last_name">Last Name</label>
                            <input maxLength={30}  {...register('last_name', { required: 'This field is required', maxLength:30,minLength:{value:10, message:'The name is too short'}})} type="text" name="last_name" id="last_name" class="h-10 border mt-1 rounded px-4 w-full bg-gray-100"  />
                            {errors.last_name ?<div className="bg-red-300 text-red-900 font-bold py-2 px-2 mt-2">{errors.last_name?.message}</div> : null}
                            
                        </div>
                        <div class="md:col-span-5">
                            <label className="font-bold text-gray-800" htmlFor="email">Email</label>
                            <input {...register('email', { required: 'This field is required', pattern: {value:/^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/,message:'Please enter a valid email'}})} type="text" name="email" id="email" class="h-10 border mt-1 rounded px-4 w-full bg-gray-100" placeholder="email@domain.com" />
                            {errors.email ?<div className="bg-red-300 text-red-900 font-bold py-2 px-2 mt-2">{errors.email?.message}</div> : null}
                            
                        </div>

                        <div class="md:col-span-3">
                            <label className="font-bold text-gray-800" htmlFor="address">Address / Street</label>
                            <input {...register('address', { required: 'This field is required', maxLength:30})} type="text" name="address" id="address" class="h-10 border mt-1 rounded px-4 w-full bg-gray-100" placeholder="" />
                            {errors.address ?<div className="bg-red-300 text-red-900 font-bold py-2 px-2 mt-2">{errors.address?.message}</div> : null}
                        </div>

                        <div class="md:col-span-2">
                            <label className="font-bold text-gray-800" htmlFor="country">Country / region</label>
                            <div class="h-10 bg-gray-100 flex border border-gray-200 rounded items-center mt-1">
                            <select {...register('country', { required: 'This field is required'})}  name="country" id="country" onChange={(e) =>
                            handleCountryChange(countries.find((c) => c.isoCode === e.target.value))
                            }placeholder="Country" class="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent">
                                <option value=''>Select Country</option>
                                {countries.map((country) => (
                                    <option  key={country.isoCode} value={country.isoCode} className="relative">{country.name}</option>
                                ))}
                            </select>
                            </div>
                            {errors.country?<div className="bg-red-300 text-red-900 font-bold py-2 px-2 mt-2">{errors.country?.message}</div> : null}
                        </div>

                        <div class="md:col-span-2">
                            <label className="font-bold text-gray-800" htmlFor="state">State / province</label>
                            <div class="h-10 bg-gray-100 flex border border-gray-200 rounded items-center mt-1">
                            <select {...register('state', { required: 'This field is required'})} name="state" disabled = {!selectedCountry} id="state"   onChange={(e) =>
                            handleStateChange(states.find((s) => s.isoCode === e.target.value))} placeholder="State" class="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent">
                                <option value=''>Select State</option>
                                {states.map((state) => (
                                    <option key={state.isoCode} value={state.isoCode} className="relative">{state.name}</option>
                                ))}
                            </select>
                            </div>
                            {errors.state?<div className="bg-red-300 text-red-900 font-bold py-2 px-2 mt-2">{errors.state?.message}</div> : null}
                        </div>

                        <div class="md:col-span-2">
                            <label className="font-bold text-gray-800" htmlFor="city">City</label>
                            <select {...register('city', { required: 'This field is required'})} type="text" name="city" disabled = {!selectedState} id="city" class="h-10 border mt-1 rounded px-4 w-full bg-gray-100" placeholder="Select City" >
                                <option value=''>Select City</option>
                                {cities.map((city) => (
                                    <option key={city.name} value={city.name} className="relative">{city.name}</option>
                                ))}
                            </select>
                            {errors.city?<div className="bg-red-300 text-red-900 font-bold py-2 px-2 mt-2">{errors.city?.message}</div> : null}
                        </div>

                        <div className="md:col-span-1">
                            <label className="font-bold text-gray-800" htmlFor="NIN">National Number</label>
                            <input {...register('NIN', { required: 'This field is required', pattern : {value: /^[0-9]{11}?$/, message:'Please enter a valid national number'}})} type="text" name="NIN" id="NIN" class="transition-all flex items-center h-10 border mt-1 rounded px-4 w-full bg-gray-100" />
                            {errors.NIN?<div className="bg-red-300 text-red-900 font-bold py-2 px-2 mt-2">{errors.NIN?.message}</div> : null}
                            
                        </div>
                        <div className="md:col-span-5 text-right">
                            <div className="inline-flex items-end">
                            <button onClick= {() => isSubmitSuccessful&&setDisplayed(!displayed)} className="bg-blue-700  hover:bg-blue-400 text-white font-bold py-2 px-4 rounded ease-in-out transition-delay-200"  >Submit</button>
                            </div>
                        </div><br></br>
                        {isSubmitSuccessful ? <div className="inline-flex w-full md:col-span-2 md:col-start-4 lg:col-span-3 lg:col-start-4 lg:col-end-6 lg:justify-end lg:items-end lg:text-right">
                        <Collapse in = {displayed} timeout='auto'>
                        <Alert
                        severity="success"
                        action={
                            <Button color="inherit" size="small" onClick= {() => {(setDisplayed(!displayed));reset()}}>
                            {displayed? 'Ok' : 'Ok'}  
                            </Button>
                        }
                        >
                        Form Submitted Successfully.
                        </Alert>
                        </Collapse>
                        </div> : null}
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </form>
    )
}

export default AppointmentForm