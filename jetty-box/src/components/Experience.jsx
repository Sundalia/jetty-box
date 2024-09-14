import Box from "./Box";
import {Canvas} from "@react-three/fiber"
import useDetectScroll from "@smakss/react-scroll-direction"



function Experience() {
    const { scrollDir } = useDetectScroll()


    window.onscroll = () => {
        const canvasChild = document.getElementById("canvas_child")
        const firstSlide = document.getElementById("first_slide")
        const currentScroll = window.scrollY    



        if (currentScroll <= 50) {
            canvasChild.className = "child_canvas"
            firstSlide.style.display = "none"
        } 
        if(currentScroll >= 50 && currentScroll <= 490 && scrollDir === 'down') {
            canvasChild.className = "sticky"
            firstSlide.style.display = "none"
        }
        if(currentScroll >= 550) {
            firstSlide.style.display = "block"
        }
        if (currentScroll >= 591 && currentScroll <= 690) {
            canvasChild.className = "child_canvas"
        }
    }

    return (
        <div id="canvas" className="parent_canvas">
            <div id="canvas_child" className="child_canvas">
                <Canvas camera={{fov: 25, near: 0.1, far: 100,zoom: 1, position: [0, -10, 5]}}>
                    <pointLight position={[0, -6.5, 5]} intensity={12} color="#FFFFFF"/>
                    <pointLight position={[0, 0.5, 0]} intensity={20} color="#FFEB50"/>
                        <Box/>
                </Canvas>
            </div>
        </div>
    )
}

export default Experience