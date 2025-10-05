import illustration from "@/assets/illustration.svg"
import FormComponent from "@/components/forms/FormComponent"
import Footer from "@/components/common/Footer"
import { TbPlugConnected, TbUsersGroup, TbCode, TbLink, TbClick } from "react-icons/tb"
import { MdOutlineDraw } from "react-icons/md"
import { PiSparkle } from "react-icons/pi"
import { useRef, useEffect } from "react"

function HomePage() {
    const sectionRefs = useRef<Array<HTMLDivElement | null>>([])

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("fade-in")
                        observer.unobserve(entry.target)
                    }
                })
            },
            {
                threshold: 0.1,
            },
        )

        sectionRefs.current.forEach((ref) => {
            if (ref) {
                observer.observe(ref)
            }
        })

        return () => {
            sectionRefs.current.forEach((ref) => {
                if (ref) {
                    observer.unobserve(ref)
                }
            })
        }
    }, [])

    const addToRefs = (el: HTMLDivElement | null) => {
        if (el && !sectionRefs.current.includes(el)) {
            sectionRefs.current.push(el)
        }
    }

    return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-dark text-white">
            {/* Hero Section */}
            <section ref={addToRefs} className="flex w-full flex-col items-center justify-center px-4 py-20 text-center opacity-0 transition-opacity duration-1000 ease-in-out">
                <h1 className="mb-4 text-5xl font-bold text-primary animate-fade-in-down">
                    Code Pulse: Real-time Collaboration, Simplified
                </h1>
                <p className="mb-8 max-w-2xl text-lg text-light animate-fade-in-up">
                    Enjoy seamless, real-time code editing and collaboration with friends and colleagues.
                    Share ideas, debug together, and bring your projects to life, instantly.
                </p>
                <a href="#join-form" className="rounded-lg bg-primary px-8 py-3 text-lg font-semibold text-dark transition-all hover:bg-green-500 animate-pulse">
                    Start Collaborating Now!
                </a>
            </section>

            {/* Main Content with Form and Illustration */}
            <div className="my-12 flex w-full flex-col items-center justify-evenly sm:flex-row sm:pt-0">
                <div ref={addToRefs} className="flex w-full animate-up-down justify-center sm:w-1/2 sm:pl-4 opacity-0 transition-opacity duration-1000 ease-in-out">
                    <img
                        src={illustration}
                        alt="Code Pulse Illustration"
                        className="mx-auto w-[250px] sm:w-[400px]"
                    />
                </div>
                <div id="join-form" ref={addToRefs} className="flex w-full items-center justify-center sm:w-1/2 opacity-0 transition-opacity duration-1000 ease-in-out">
                    <FormComponent />
                </div>
            </div>

            {/* Features Section */}
            <section ref={addToRefs} className="w-full px-4 py-16 text-center opacity-0 transition-opacity duration-1000 ease-in-out">
                <h2 className="mb-12 text-4xl font-bold text-primary">
                    Why Choose Code Pulse?
                </h2>
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
                    <div className="flex flex-col items-center p-6 rounded-lg shadow-lg bg-darkHover transition-all hover:scale-105">
                        <TbPlugConnected size={50} className="mb-4 text-primary animate-bounce-slow" />
                        <h3 className="mb-2 text-xl font-semibold text-white">Real-time Sync</h3>
                        <p className="text-light">Effortless, instant updates across all connected users.</p>
                    </div>
                    <div className="flex flex-col items-center p-6 rounded-lg shadow-lg bg-darkHover transition-all hover:scale-105">
                        <TbUsersGroup size={50} className="mb-4 text-primary animate-bounce-slow animation-delay-200" />
                        <h3 className="mb-2 text-xl font-semibold text-white">Collaborative Coding</h3>
                        <p className="text-light">Work together in real-time, just like Google Docs.</p>
                    </div>
                    <div className="flex flex-col items-center p-6 rounded-lg shadow-lg bg-darkHover transition-all hover:scale-105">
                        <MdOutlineDraw size={50} className="mb-4 text-primary animate-bounce-slow animation-delay-400" />
                        <h3 className="mb-2 text-xl font-semibold text-white">Interactive Drawing</h3>
                        <p className="text-light">Visualize ideas with an integrated drawing board.</p>
                    </div>
                    <div className="flex flex-col items-center p-6 rounded-lg shadow-lg bg-darkHover transition-all hover:scale-105">
                        <TbCode size={50} className="mb-4 text-primary animate-bounce-slow animation-delay-600" />
                        <h3 className="mb-2 text-xl font-semibold text-white">Full-featured Editor</h3>
                        <p className="text-light">Syntax highlighting, auto-suggestions, and more.</p>
                    </div>
                </div>
            </section>

            {/* How It Works Section */}
            <section ref={addToRefs} className="w-full px-4 py-16 text-center opacity-0 transition-opacity duration-1000 ease-in-out bg-dark">
                <h2 className="mb-12 text-4xl font-bold text-primary">
                    How Code Pulse Works
                </h2>
                <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                    <div className="flex flex-col items-center p-6 rounded-lg shadow-lg bg-darkHover transition-all hover:scale-105">
                        <TbClick size={50} className="mb-4 text-primary animate-bounce-slow" />
                        <h3 className="mb-2 text-xl font-semibold text-white">1. Create a Room</h3>
                        <p className="text-light">Generate a unique room ID and enter your username to get started.</p>
                    </div>
                    <div className="flex flex-col items-center p-6 rounded-lg shadow-lg bg-darkHover transition-all hover:scale-105">
                        <TbLink size={50} className="mb-4 text-primary animate-bounce-slow animation-delay-200" />
                        <h3 className="mb-2 text-xl font-semibold text-white">2. Share the Link</h3>
                        <p className="text-light">Invite collaborators by sharing the room link. They can join instantly!</p>
                    </div>
                    <div className="flex flex-col items-center p-6 rounded-lg shadow-lg bg-darkHover transition-all hover:scale-105">
                        <PiSparkle size={50} className="mb-4 text-primary animate-bounce-slow animation-delay-400" />
                        <h3 className="mb-2 text-xl font-semibold text-white">3. Start Collaborating</h3>
                        <p className="text-light">Enjoy real-time coding, drawing, and chatting with your team.</p>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    )
}

export default HomePage
