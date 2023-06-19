// const magick = require("image-magick-js");

import magick from "image-magick-js";

const im: any = magick;

export const convert = async (sourceFile,targetFile) => {

    const options = "convert -background white " + sourceFile + " " + targetFile;

   // console.log(m.convert);
    return await im.custom(options);

    // .then((response) => console.log(response))
    // .catch((e) => {console.log(e);});

}

