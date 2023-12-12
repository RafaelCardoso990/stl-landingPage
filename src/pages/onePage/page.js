import ButtonCta from "../../components/buttonWpp/ButtonCta"
import Footer from "../../components/footer/footer"
import Header from "../../components/header/header"
import ParagraphOne from "../../components/packageIncluded/paragraphs/paragraph1/paragraph1"
import ParagraphTwo from "../../components/packageIncluded/paragraphs/paragraph2/paragraph2"
import ParagraphTree from "../../components/packageIncluded/paragraphs/paragraph3/paragraph3"
import ParagraphFour from "../../components/packageIncluded/paragraphs/paragraph4/paragraph4"
import ParagraphFive from "../../components/packageIncluded/paragraphs/paragraph5/paragraph5"
import ParagraphSix from "../../components/packageIncluded/paragraphs/paragraph6/paragraph6"

export default function Page(){
    return (
        <>
        <Header/>
        <ParagraphOne/>
        <ParagraphFive/>
        <ParagraphTwo/>
        <ParagraphTree/>
        <ParagraphFour/>
        <ParagraphSix/>
        <ButtonCta/>
        <Footer/>
        </>
    )
}