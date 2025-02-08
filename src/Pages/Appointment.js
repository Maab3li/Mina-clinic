import AppointmentForm from "../Parts/AppointmentForm"

function Appointment () {
    return (
        <div id="appointment" class = 'section'>
            <div className="flex justify-center items-center flex-col pt-10">
                <div className="font-bold text-3xl text-center text-gray-900 pt-10">Appointment</div>
                <div className="text-xl py-2 px-2 md:px-20 lg:px-32 flex-justify-center items-center ">
                        Our employees are available to review your requests, please fill the form below to be up for an appointment.
                </div>
                <div>
                    <AppointmentForm />
                </div>
            </div>
        </div>
    )
}

export default Appointment