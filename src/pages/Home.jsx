import { AboutUs } from "../components/AboutUs"
import { ContactUs } from "../components/ContactUs"
import { SlideShow } from "../components/SlideShow"
export const Home = () => {
    return (
        <>
        <main>
            <SlideShow />
            <AboutUs />
            <ContactUs />
        </main>
        </>
    )
}