import Hero from "./Hero.tsx";

function RiskToleranceResults() {
    function handleOnClick() {
        window.open('https://www.youtube.com/watch?v=Rtbgf9VZYRs');
    }

    return (
        <Hero imageSrc={ 'src/assets/risk-tolerance-hero.jpeg' }>
            <div className="justify-center items-center flex flex-col h-full">
                <h1 className="text-4xl font-bold text-[#cf0419] font-family-unicredit-bold text-center"> Toleranțǎ fațǎ de <br/> risc mediu </h1>
                <div
                    onClick={handleOnClick}
                    className="cursor-pointer mb-10 max-w-70 font-bold text-3xl bg-[#e2061d] text-[#fafafa] text-center w-10/12 p-3 rounded-2xl font-family-unicredit-bold m-10">
                    Obligațiuni
                </div>
                <span className="text-center text-xl">Banii tăi merită siguranță. Alege obligațiunile pentru un viitor financiar stabil.</span>
            </div>
        </Hero>
    );
}

export default RiskToleranceResults;