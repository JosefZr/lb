import ImageCards from "./components/ImageCards";

export default function BENYAHIAFamily() {
    return (
        <div className="flex flex-row max-[680px]:flex-col max-[680px]:gap-28 justify-between max-[680px]:items-center gap-20 max-w-3xl mx-auto pt-20 pb-28">
            <ImageCards 
                image1={"/family/mus2.jpg"} 
                image2={"/family/mus1.jpg"} 
                style=" gap-5 "
                text={(
                    <>
                    Dr.M.BENYAHIA <br/>
                    With over 30 years in the field, he's constantly updating his dental knowledge to provide you with a unique experience !"    
                    </>
                )}
            />
            <ImageCards  
                image1={"/family/lotfi2.jpg"} 
                image2={"/family/lotfi1.jpg"}  
                style=" gap-48"
                text={(
                    <>
                        L.BENYAHIA (H-V-M)
                        <br />
                        • Studying at Kazan State Medical University.
                        <br />
                        • The leader of (ЛБ-STOMATOLOGY - ЛБ’s Generations)
                    </>
                )}
            />
        </div>
    );
}
