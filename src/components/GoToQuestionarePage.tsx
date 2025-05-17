import Hero from "./Hero.tsx";

function GoToQuestionarePage() {
    function handleOnButtonClick() {
        window.open('https://comunicareunicredit.ro/investing-personality-quiz/');
    }

    return (
        <Hero imageSrc={ 'assets/raspunde-la-intrebari.jpg' }>
            <div className="justify-center items-center flex flex-col h-full">
                <h1 className="text-4xl font-bold text-[#cf0419] font-family-unicredit-bold"> Ce e de fǎcut? </h1>
                <img className="w-20 m-10" src="/assets/arrow-down.png" alt="Arrow down"/>
                <div
                    onClick={handleOnButtonClick}
                    className="mb-10 max-w-60 cursor-pointer font-bold text-2xl bg-[#e2061d] text-[#fafafa] text-center w-9/12 p-3 rounded-2xl">
                    Rǎspunde la câteva <br/> întrebǎri
                </div>
                <span className="text-center text-xl">Te va ajuta să afli soluția perfectă <br/> pentru tine!</span>
            </div>
        </Hero>
    );
}

export default GoToQuestionarePage;