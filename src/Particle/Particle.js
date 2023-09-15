import { useCallback } from "react";
import { loadFull } from "tsparticles";
import Particles from "react-tsparticles";

function Particle(option) {

    const particlesInit = useCallback(async engine => {
        console.log(engine);
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
        await console.log(container);
    }, []);

    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
                autoPlay: true,
                background: {
                    color: {
                        value: "#fff"
                    },
                },
                fullScreen: {
                    enable: true,
                    zIndex: -1
                },
                particles: {
                    color: {
                        value: "#ff8000",
                    },
                    links: {
                        blink: true,
                        color: {
                            value: "#ff8000"
                        },
                        consent: false,
                        distance: 100,
                        enable: true,
                        frequency: 0.4,
                        opacity: 1,
                        shadow: {
                            blur: 5,
                            color: {
                                value: "#000"
                            },
                            enable: false
                        },
                        triangles: {
                            enable: true,
                            frequency: 0.3
                        },
                        width: 3,
                        warp: false
                    },
                    move: {
                        angle: {
                            offset: 0,
                            value: 90
                        },
                        center: {
                            x: 50,
                            y: 50,
                            radius: 10
                        },
                        decay: 0,
                        distance: {},
                        direction: "none",
                        drift: 0,
                        enable: true,
                        random: false,
                        size: false,
                        speed: 1,
                    },
                    number: {
                        density: {
                            enable: true,
                            area: 1200,
                            factor: 1200
                        },
                        limit: 0,
                        value: 200
                    },
                    shape: {
                        options: {},
                        type: "circle"
                    },
                    size: {
                        random: {
                            enable: true,
                            minimumValue: 3
                        },
                        value: {
                            min: 3,
                            max: 4
                        },
                        animation: {
                            count: 0,
                            enable: true,
                            speed: 3,
                            sync: false,
                            destroy: "none",
                            startValue: "random",
                            minimumValue: 1
                        }
                    },
                    stroke: {
                        width: 2
                    },
                },
                pauseOnBlur: true,
                pauseOnOutsideViewport: true,
                zLayers: 100,
            }}
        />
    );

}

export default Particle;