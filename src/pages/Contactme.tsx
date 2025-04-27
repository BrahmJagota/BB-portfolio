import hector from '../assets/images/hector.png'
import ContactMeForm from '../components/ContactMeForm'

export default function ContactMe() {
    return (
        <div className="h-screen bg-[#1A1A1A] relative flex">
            <div className='flex-1'>
                <ContactMeForm />
            </div>
            <div className='self-end'>
            <img src={hector} alt="" className='-scale-x-100 '/>
            </div>
        </div>
    )
}



