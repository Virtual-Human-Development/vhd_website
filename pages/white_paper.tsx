import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useTheme } from '../context/ThemeContext';

export default function About() {
    const { theme } = useTheme();

    return (
        <div className="flex flex-col min-h-screen" style={{ backgroundColor: 'var(--background-color)', color: 'var(--text-color)' }}>
            <Head>
                <title>VHD Website - About</title>
                <meta name="description" content="About the VHD Website" />
            </Head>

            <Navbar />

            <header className="text-center pt-20 pb-16">
                <div className="max-w-2xl mx-auto px-4">
                    <h1 className="text-2xl">White Paper:</h1>
                    <br />
                    <br />
                    <h1 className="text-4xl font-bold">A Virtual Simulator of Human Development is Needed</h1>
                </div>
            </header >

            <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">

                {/* Section 1: Abstract */}
                <section>
                    <h2 className="text-2xl font-bold mb-4">Abstract</h2>
                    <div className="space-y-4">
                        <p>Current problems in the field are related to the disjoint nature of empirical and modeling efforts aimed at capturing development. These efforts often focus on specific windows of time or tissues. Digital twins to date propose to model mature adult tissue independently. While targeting disease is important, these disjoint systems miss the opportunity to identify and target disease earlier, potentially improving regenerative therapies.</p>
                        <p>The VHD consortium proposes creating a human development simulator to tackle this problem. This initiative has a unique strategy that allows for experiment-to-theory cycles and for the first time ensures efforts are strategically aligned.</p>
                        <p>Today, we are in the right era to make a simulator due to advancements in genomics, single-cell genomics, organoid models, and computing and modeling technologies.</p>
                    </div>
                </section>

                {/* Section 2: Benefits of the Simulator */}
                <section>
                    <h2 className="text-2xl font-bold mb-4">Benefits of the Simulator</h2>
                    <div className="space-y-4">
                        <p>The simulator will be a powerful tool that will:</p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Provide a window into the formation of the human body, catalyzing new hypotheses for the developmental biology field to push the boundaries of what we know about our origins.</li>
                            <li>Serve as a platform for rational cellular design, allowing us to engineer biological substrates for regenerative medicine.</li>
                            <li>Provide potential treatments, predict clinical trajectories, and be adapted for personalized medicine approaches.</li>
                        </ul>
                    </div>
                </section>

                {/* Section 3: Strategic Approaches */}
                <section>
                    <h2 className="text-2xl font-bold mb-4">Strategic Approaches</h2>
                    <div className="space-y-4">
                        <p>To create the simulator, we chart a path forward with the following immediate steps:</p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Assemble a team of experts to coordinate and align their efforts toward the goal.</li>
                            <li>Leverage existing initiatives and tested models by developing interpreters and integrative tools that will make the information accessible and usable by everyone.</li>
                            <li>Create a standardized framework for data collection/storage and process semantics.</li>
                            <li>Develop an engineered human pluripotent stem cell line to be used across experimental systems.</li>
                        </ul>
                    </div>
                </section>

                {/* Section 4: Proof-of-Concept Target Areas */}
                <section>
                    <h2 className="text-2xl font-bold mb-4">Proof-of-Concept Target Areas</h2>
                    <div className="space-y-4">
                        <p>We will focus on early embryonic development and somitogenesis as proof-of-concept target areas. These areas will help establish the foundation for building the simulator and demonstrate its potential impact on understanding human development and improving regenerative therapies.</p>
                    </div>
                </section>

            </main>

            <Footer />
        </div >
    );
}
