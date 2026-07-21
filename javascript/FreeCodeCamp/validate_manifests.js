function normalizeUnits(manifest){

  const manifestClone = {...manifest};

 

  if(manifest.unit == "lb"){

    manifestClone.unit = "kg";

    manifestClone.weight *= 0.45;

  }

  return manifestClone;

}

 

function validateManifest(manifest) {

  const errors = {};

 

  // containerId

  if ("containerId" in manifest) {

    if (typeof manifest.containerId === "number" && manifest.containerId > 0 && Number.isInteger(manifest.containerId)) {

      // válido

    } else {

      errors.containerId = "Invalid";

    }

  } else {

    errors.containerId = "Missing";

  }

 

  // destination

  if ("destination" in manifest) {

    if (typeof manifest.destination === "string" && manifest.destination.trim() !== "") {

      // válido

    } else {

      errors.destination = "Invalid";

    }

  } else {

    errors.destination = "Missing";

  }

 

  // weight

  if ("weight" in manifest) {

    if (typeof manifest.weight === "number" && manifest.weight > 0) {

      // válido

    } else {

      errors.weight = "Invalid";

    }

  } else {

    errors.weight = "Missing";

  }

 

  // unit

  if ("unit" in manifest) {

    if (manifest.unit === "kg" || manifest.unit === "lb") {

      // válido

    } else {

      errors.unit = "Invalid";

    }

  } else {

    errors.unit = "Missing";

  }

 

  // hazmat

  if ("hazmat" in manifest) {

    if (typeof manifest.hazmat === "boolean") {

      // válido

    } else {

      errors.hazmat = "Invalid";

    }

  } else {

    errors.hazmat = "Missing";

  }

 

  return errors;

}

 

function processManifest(manifest){

  if((Object.keys(validateManifest(manifest)).length === 0)){

    console.log(`Validation success: ${manifest.containerId}`);

    normalizeUnits(manifest);

    console.log(`Total weight: ${normalizeUnits(manifest).weight} kg`);

   

  }else{

    console.log(`Validation error: ${manifest.containerId}`);

    console.log(validateManifest(manifest));

  }

 

}

 

const example = {

  containerId: 1,

  destination: "Monterey, California, USA",

  weight: 831,

  unit: "lb",

  hazmat: false

}

 

console.log(normalizeUnits({ containerId: 68, destination: "Salinas", weight: 101, unit: "lb", hazmat: true }))

console.log(validateManifest({ containerId: -88, destination: "Soledad", weight: NaN }));

console.log(processManifest({ containerId: 55, destination: "Carmel", weight: 400, unit: "lb", hazmat: false }))