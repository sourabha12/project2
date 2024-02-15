export default function Projects() { 
    return ( 
        <section id="projects"
                 className="my-20 w-full flex flex-col gap-5 align-center max-w-5xl mx-auto"> 
            <h2 className="text-5xl text-emerald-600 font-bold text-center"> 
                My Projects 
            </h2> 
           
            <div className="p-10 bg-emerald-300 flex flex-col justify-center items-center gap-5  
                            lg:flex-row-reverse max-w-5xl mx-auto shadow transition hover:shadow-xl  
                            hover:scale-[102%] w-full"> 
                <div className="w-80 rounded"> 
                    <a href= 
"https://myprojectszz.blogspot.com/2024/02/salary-management-system.html"
                       className="w-full h-full"> 
                        <img src= 
" https://projectabstracts.com/wp-content/uploads/2017/12/pg-03628-salary-management-.jpg"
                             alt="Project 2"
                             className="w-full h-full bg-cover rounded" /> 
                    </a> 
                </div> 
                <div className="flex flex-col align-center mx-auto gap-4 justify-center flex-1"> 
                    <h2 className="font-bold text-3xl text-center"> 
                        <a className="hover:underline" href= 
"https://myprojectszz.blogspot.com/2024/02/salary-management-system.html"> 
                           Salary Managment System
                        </a> 
                    </h2> 
                    <p> 
                        Created a project named "Salary Managment System" of MBC SHIVANI Bottling company.
                         We have created UI design and Jira roadmap for this project.In react.js we commenced work on loginpage,Homepage,
                         Dashboard and logout page.</p>
                         <p># For login page we have implemented user fields such as email and password.Added a background image
                         into the login page for enhanced visual appeal.
                          </p> 
                          <p># For Home page we have added comprehensive company details.we have added
                            a background image and successfully finalized company's Homepage.
                          </p>
                          <p># For Dashboard we have  designed and implemented a customer details table.Added customer
                            information such as EmployeeName,EmployeeID,Gender,Age,Status,AvgSalary and Remarks.</p>
                            <p>
                                #For logout page incorporating user fields for email and password along with logout.
                          </p>
                </div> 
            </div> 
        </section> 
    ); 
}