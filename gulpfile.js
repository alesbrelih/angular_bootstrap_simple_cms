
// ----- REGISTER NEEDED MODULES ----- //

const gulp =            require("gulp");
const sass =            require("gulp-sass");
const browserify =      require("browserify");
const source =          require("vinyl-source-stream");
const plumber =         require("gulp-plumber");
const browserSync =     require("browser-sync");
const gutil =           require("gutil");
const autoprefixer =    require("gulp-autoprefixer");


// ------ location of files ---- //

const scripts = "./scripts/**/*.js";
const styles = "./scss/**/*.scss";

// ------ TASKS ----------- //

//browserify
gulp.task("browserify",()=>{
    return browserify("./scripts/app/app.js")
        .bundle()
        .on("error",function(err){
            gutil.log(err);
            this.emit("end");
        })
        .pipe(source("app.b.js"))
        .pipe(gulp.dest("./www"));
});
//sass
gulp.task("sass",()=>{
    return gulp.src("./scss/main.scss")
        .pipe(plumber())
        .pipe(sass().on("error", sass.logError))
        .pipe(autoprefixer())
        .pipe(gulp.dest("./www"));
});

//sass - watch
gulp.task("watch-sass",["sass"],(done)=>{

    browserSync.reload();

    done();
});

//browserify - watch
gulp.task("watch-browserify",["browserify"],(done)=>{

    browserSync.reload();

    done();
});

//init debug mode
gulp.task("debug",()=>{

    //browser sync
    browserSync.init({
        server:"./www",
        files:["./www/**/*.*"]
    });

    //set watch browserify
    gulp.watch(scripts,["watch-browserify"]);

    //set watch sass
    gulp.watch(styles,["watch-sass"]);

});