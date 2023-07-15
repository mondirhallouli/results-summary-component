import './App.css'
import reactionIcon from "./assets/images/icon-reaction.svg"
import memoryIcon from "./assets/images/icon-memory.svg"
import verbalIcon from "./assets/images/icon-verbal.svg"
import visualIcon from "./assets/images/icon-visual.svg"

function App() {

    return (
        <>
            <main className="w-full mx-auto md:w-3/4 2xl:w-4/12 md:mt-20 md:flex rounded-b-3xl md:rounded-3xl font-hanken text-lg">
                <section className="rounded-b-3xl md:rounded-3xl md:w-1/2 bg-gradient-to-b from-light-slate-blue to-light-royale-blue text-zinc-300 text-center p-6">
                    <h3 className="font-bold text-light-lavender mb-4">Your Result</h3>
                    <div className="w-36 h-36 mx-auto mb-4 rounded-full flex flex-col items-center justify-center bg-gradient-to-b from-violet-blue to-persian-blue">
                        <span className="text-6xl font-bold">76</span>
                        <span className="text-light-lavender">of 100</span>
                    </div>
                    <h3 className="font-bold text-2xl mb-2">Great</h3>
                    <p className="w-80 md:w-full mx-auto text-light-lavender">
                        You scored higher than 65% of the people who have taken these tests.
                    </p>
                </section>

                <section className="w-4/5 md:w-1/2 mx-auto p-6 bg-white rounded-b-3xl">
                    <h3 className="text-dark-gray-blue font-bold mb-4">Summary</h3>

                    <div className="mb-8">
                        <div className="flex justify-between p-2 mb-4 bg-Light-red/5 rounded-lg">
                            <span className="flex gap-3">
                                <img src={reactionIcon} alt="reaction icon" />
                                <span className="text-Light-red">Reaction</span>
                            </span>
                            <span className="text-dark-gray-blue/50 font-medium"><span className="text-dark-gray-blue">80</span> / 100</span>
                        </div>

                        <div className="flex justify-between p-2 mb-4 rounded-lg bg-Orangey-yellow/5">
                            <span className="flex gap-3">
                                <img src={memoryIcon} alt="memory icon" />
                                <span className="text-Orangey-yellow">Memory</span>
                            </span>
                            <span className="text-dark-gray-blue/50 font-medium"><span className="text-dark-gray-blue">92</span> / 100</span>
                        </div>

                        <div className="flex justify-between p-2 mb-4 rounded-lg bg-Green-teal/5">
                            <span className="flex gap-3">
                                <img src={verbalIcon} alt="verbal icon" />
                                <span className="text-Green-teal">Verbal</span>
                            </span>
                            <span className="text-dark-gray-blue/50 font-medium"><span className="text-dark-gray-blue">61</span> / 100</span>
                        </div>

                        <div className="flex justify-between p-2 rounded-lg bg-Cobalt-blue/5">
                            <span className="flex gap-3">
                                <img src={visualIcon} alt="visual icon" />
                                <span className="text-Cobalt-blue">Visual</span>
                            </span>
                            <span className="text-dark-gray-blue/50 font-medium"><span className="text-dark-gray-blue">72</span> / 100</span>
                        </div>
                    </div>

                    <button className="block w-full mx-auto text-center ease-in-out bg-dark-gray-blue hover:bg-gradient-to-b hover:from-light-slate-blue hover:to-light-royale-blue text-white font-bold p-3 rounded-full">Continue</button>
                </section>
            </main>
            <div class="w-64 mx-auto mt-40 text-center text-dark-gray-blue">
                Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
                Coded by <a href="https://www.linkedin.com/in/mondir-hallouli/" target='_blank'>Mondir Hallouli</a>.
            </div>
        </>
    )
}

export default App
