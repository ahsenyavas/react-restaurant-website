
import Footer from "./footer";
import Navbar from "./navbar";


export default function Layouts({children}) {
    return (
        <>
         <Navbar />   
         {children}
         <Footer />
        </>
    )
}
