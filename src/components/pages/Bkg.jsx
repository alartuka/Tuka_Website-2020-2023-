import React from "react";
import Particles from "react-particles";
import { useCallback } from "react";
import { loadFull } from "tsparticles";

const particleOptions = {
    fullScreen: {
        enable: true,
        zIndex: -1
    },
  particles: {
    number: {
      value: 350,
      density: {
        enable: true,
        value_area: 800,
      },
    },
    color: {
      value: "#ffffff",
    },
    shape: {
      type: "star",
      options: {
        sides: 5
      },
      stroke: {
        width: 0,
        color: "#000000",
      },
      polygon: {
        nb_sides: 5,
      },
    },
    opacity: {
      value: 0.9,
      random: false,
      anim: {
        enable: true,
        speed: 1,
        opacity_min: 0.1,
        sync: false,
      },
    },
    size: {
      value: 3.3,
      random: true,
      anim: {
        enable: true,
        speed: 0.2,
        size_min: 0.1,
        sync: false,
      },
    },
    line_linked: {
        enable: false
    },
    move: {
      enable: true,
      speed: 0.15,
      direction: "none",
      random: true,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200,
      },
    },
  },
    interactivity: {
        events: {
            onhover: {
                enable: false,
                mode: "repulse"
            },
            repulse: {
                distance: 0,
                duration: 0
            },
            // bubble: {
            //     distance: 600,
            //     size: 60,
            //     duration: 0.1,
            //     opacity: 1
            // }
        }
    },
  retina_detect: false,
  background: {
    image: "",
    position: "50% 50%",
    repeat: "no-repeat",
    size: "cover"
}
};

const BackgroundAnimation = () => {
    const particlesInit = useCallback(async engine => {
        console.log(engine);
        // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
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
        options={particleOptions}
    />
  );
};

export default BackgroundAnimation;
