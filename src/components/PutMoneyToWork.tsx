import Hero from "./Hero.tsx";
import {type ChangeEvent, useState} from "react";

function computeCompoundInterest(annualInvestment: number, annualReturn: number, years: number) {
    let total = 0;

    for (let year = 1; year <= years; year++) {
        total = (total + annualInvestment) * (1 + annualReturn);
    }

    return total;
}

const MIN = 0;
const MAX = 40;

const SUM_OF_MONEY = 100;

function PutMoneyToWork() {
    const [numberOfYears, setNumberOfYears] = useState(10);

    const percentage = ((numberOfYears - MIN) / (MAX - MIN)) * 100;

    function handleSliderChange(e: ChangeEvent<HTMLInputElement>) {
        setNumberOfYears(Number(e.target.value));
    }

    const uninvestedSum = SUM_OF_MONEY * 12 * numberOfYears;
    const investedSum = computeCompoundInterest(SUM_OF_MONEY * 12, 0.11, numberOfYears);

    return (
        <Hero imageSrc={ 'src/assets/put-money-to-work-hero.jpeg' }>
            <div className="justify-center items-center flex flex-col h-full">
                <div
                    className="mb-10 max-w-80 font-bold text-3xl bg-[#e2061d] text-[#fafafa] text-center w-10/12 p-3 rounded-2xl font-family-unicredit-bold">
                    Pune banii la treaba
                </div>
                <div className="mb-20 text-xl">
                    <p>Sumǎ investitǎ: <span className="text-[#e2061d] font-family-unicredit-bold">100 LEI / Lunǎ</span>
                    </p>
                    <p>Perioadǎ: <span className="text-[#e2061d] font-family-unicredit-bold">{numberOfYears} de ani</span></p>

                </div>
                <div className="text-xl">
                    <p className="text-center mb-20">Dacǎ <span
                        className="font-family-unicredit-bold text-[#e2061d]">NU</span> investeai aveai în cont: <br/>
                        <span className="bg-[#e2061d] text-white p-1 rounded-sm text-4xl">{uninvestedSum} LEI</span></p>
                    <p className="text-center mb-5">Dacǎ <span
                        className="font-family-unicredit-bold text-[#0571d3]">INVESTEAI</span> aveai în cont: <br/>
                        <span className="bg-[#0571d3] text-white p-1 rounded-sm text-4xl">{Math.floor(investedSum)} LEI</span></p>
                </div>

                <input
                    type="range"
                    min={MIN}
                    max={MAX}
                    value={numberOfYears}
                    onChange={handleSliderChange}
                    className="w-8/12 h-2 rounded-lg appearance-none cursor-pointer mt-10 bg-red-200
                   [&::-webkit-slider-thumb]:appearance-none
                   [&::-webkit-slider-thumb]:h-4
                   [&::-webkit-slider-thumb]:w-4
                   [&::-webkit-slider-thumb]:rounded-full
                   [&::-webkit-slider-thumb]:bg-red-600
                   [&::-webkit-slider-thumb]:cursor-pointer
                   [&::-moz-range-thumb]:bg-red-600
                   [&::-moz-range-thumb]:h-4
                   [&::-moz-range-thumb]:w-4
                   [&::-moz-range-thumb]:rounded-full"
                    style={{
                        background: `linear-gradient(to right, #dc2626 0%, #dc2626 ${percentage}%, #e5e7eb ${percentage}%, #e5e7eb 100%)`,
                    }}
                />
            </div>
        </Hero>
    );
}

export default PutMoneyToWork;