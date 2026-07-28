const config1 = {
  fault: false,
  phases: [
    { color: "green", duration: 5 },
    { color: "yellow", duration: 2 },
    { color: "red", duration: 4 }
  ]
};

const config2 = {
  fault: false,
  phases: [
    { color: "red", duration: 3 },
    { color: "yellow", duration: -2 },
    { color: "green", duration: 6 }
  ]
};

const config3 = {
  fault: true,
  phases: [
    { color: "green", duration: 5 },
    { color: "yellow", duration: 2 },
    { color: "red", duration: 6 }
  ]
};

const config4 = {
  fault: false,
  phases: []
};

function runSequence(config, cycles){
    for (let i = 0; i < cycles; i++) {
        if (config.phases.length == 0) {
                console.log("No phases found");
                bre
            }
        for (let j = 0; j < config.phases.length; j++) {
            const phase = config.phases[j];
            const duration = phase.duration;

            if (config.fault) {
                console.log("Faulted phase!");
                return;
            }
            if (phase.duration <= 0){
                console.log("Invalid phase detected");
                continue;
            }
            console.log(`Switching to ${phase.color} for ${duration} s`);
        }
    }
}

function generateTimeline(config, cycles) {
    const timeline = [];
    for (let i = 0; i < cycles; i++) {
        for (let j = 0; j < config.phases.length; j++) {
            const phase = config.phases[j];
            let previousDuration = timeline.length > 0 ? timeline[timeline.length - 1] : 0;
            timeline.push(phase.duration + previousDuration);
        }
    }
    return timeline;
}

console.log(runSequence(config4, 5));