
import Image from "next/image"
import Format from "../../../layout/format";
export default function page(){


    return(
            <Format>
         
                <section className="container mx-auto md:px2 py-16 w-1/2">
                  <div className="post py-10">
                    <h1 className="font-bold text-4xl text-center pb-5">most unhappy customers are your greatest soutce of learni</h1>
                    <div className="py-10">
                        <Image src={"/Screenshot 2024-09-16 020551.png"}width={900} height={600}></Image>
                    </div>
                  </div>
                </section>
             </Format> 
         
       
    )
  }
 