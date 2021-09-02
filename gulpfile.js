const {src, dest} = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const webp = require("gulp-webp");

sass.compiler =  require("dart-sass");
function compilingSASS() {
    return src("./src/style.scss")
        .pipe( sass() )
        .pipe( dest("./") );
}

exports.compilingSASS = compilingSASS;