// Initialize particles.js with enhanced interactions
const particlesConfig = {
    "particles": {
        "number": {
            "value": 80,
            "density": {
                "enable": true,
                "value_area": 800
            }
        },        "color": {
            "value": "#8EA832"
        },
        "shape": {
            "type": "circle",
            "stroke": {
                "width": 1,
                "color": "#8EA832"
            }
        },
        "opacity": {
            "value": 0.4,
            "random": true,
            "anim": {
                "enable": false,
                "speed": 1,
                "opacity_min": 0.5,
                "sync": false
            }
        },
        "size": {
            "value": 8,  // Much larger particles
            "random": true,
            "anim": {
                "enable": false,
                "speed": 80,
                "size_min": 5,  // Larger minimum size
                "sync": false
            }
        },        "line_linked": {
            "enable": true,
            "distance": 150,
            "color": "#8EA832",
            "opacity": 0.3,
            "width": 1  // Thinner lines for better visibility
        },
        "move": {
            "enable": true,
            "speed": 3,
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
                "enable": false,
                "rotateX": 600,
                "rotateY": 1200
            }
        }
    },
    "interactivity": {
        "detect_on": "window",
        "events": {
            "onhover": {
                "enable": true,
                "mode": "grab"
            },
            "onclick": {
                "enable": true,
                "mode": "push"
            },
            "resize": true
        },
        "modes": {
            "grab": {
                "distance": 250,  // Increased grab distance
                "line_linked": {
                    "opacity": 1
                }
            },
            "push": {
                "particles_nb": 4
            },
            "remove": {
                "particles_nb": 2
            }
        }
    },
    "retina_detect": true
};
