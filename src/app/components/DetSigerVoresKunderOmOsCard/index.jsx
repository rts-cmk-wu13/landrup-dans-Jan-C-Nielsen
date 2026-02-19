
export default function DetSigerVoresKunderOmOsCard({  bodytext, name, occupation }) {


    return (
        <section className="m-[27px] flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
            <p className="max-w-md  text-white leading-8">
            {bodytext}  </p>
              <h2 className=" max-w-xs text-[18]  text-white">
                {name} 
            </h2>
           <small>{occupation}</small>
          
        </section>
    )

}