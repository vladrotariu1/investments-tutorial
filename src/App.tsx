import UnicreditHeader from "./components/UnicreditHeader.tsx";
import GoToQuestionarePage from "./components/GoToQuestionarePage.tsx";
import PutMoneyToWork from "./components/PutMoneyToWork.tsx";
import RiskToleranceResults from "./components/RiskToleranceResults.tsx";

function App() {
    return (
        <div>
            <UnicreditHeader />
            <div className='max-w-4xl mx-auto pl-3 pr-3'>
                <PutMoneyToWork />
                <GoToQuestionarePage />
                <RiskToleranceResults />
            </div>
        </div>
    )
}

export default App
