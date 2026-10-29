

function Contact() {


    return (
        <div className='flex min-h-screen justify-center items-center'>
            <div className='flex flex-col gap-6 text-center' >
                <h1>Contact us</h1>

                <form>


                    <input type="text" placeholder='Enter your name' 

                    />

                     <input type="email" placeholder='Enter your email'

                    />
                    <input type="text" placeholder='Subject'
                    
                    />

                    <textarea placeholder="Enter your message"></textarea>

                    <button type='submit'  className=' bg-blue-400 text-white px-2 py-1'>Send Message</button>

                   
                </form>





            </div>

        </div>
    )
}

export default Contact