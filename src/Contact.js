export default function Contact() { 
    return ( 
        <section id="contact"
                 className="my-40 align-center max-w-5xl mx-auto p-3"> 
            <h2 className="text-5xl font-bold text-emerald-500 text-center"> 
                Contact 
            </h2> 
            <div className="flex gap-5 justify-center  
                        my-10"> 
                <a rel="noreferrer"
                   target="_blank"
                   className="text-center hover:underline"
                   href= 
"sourabhad145@gmail.com"> 
                     Email: 
                    <span className="font-bold"> 
                         sourabhad145@gmail.com
                    </span> 
                </a> 
                <a rel="noreferrer"
                   target="_blank"
                   className="text-center hover:underline"
                   href= 
 "https://github.com/sourabha12"> 
                    Github: 
                    <span className="font-bold"> 
                    https://github.com/sourabha12
                    </span> 
                </a> 
            </div> 
        </section> 
    ); 
}