export default function About() { 
    return ( 
        <section 
            id="about"
            className="px-10 w-full flex flex-col lg:flex-row py-20  
                       align-center bg-emerald-200 max-w-5xl mx-auto"> 
            <div className="flex-1"> 
                <img src= 
" https://i.pngimg.me/thumb/f/720/m2H7d3b1A0Z5G6m2.jpg"
                    alt="About"
                    className="w-2xl h-48 bg-cover"/> 
            </div> 
            <div className="flex-1 flex flex-col justify-center 
                            items-center gap-5 px-6"> 
                <div> 
                    <h2 className="text-center text-emerald-600 text-2xl font-bold">
                        About Me : 
                    </h2> 
                </div> 
                <p> 
               <h1 className="text-center text-emerald-900  
                                   text-5xl font-bold"> 
                   Hii, I am Sourabha </h1>
                </p> 
                <p className="text-center text-emerald-900  
                                   text-5xl font-bold"> 
                  I am a Full Stack Developer.. 
                </p> 
            </div> 
        </section> 
    ); 
}