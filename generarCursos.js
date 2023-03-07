const app = document.getElementById('app');

let cursos = "";

const generar = async() => {
    for (let i = 1; i <= 10; i++) {
        const dificultad = Math.round(Math.random()*2);
        console.log(dificultad);
        const curso = `
        <article class="curso">
            <div class="marcoImg">
                <img class="cursoImg" src="${"src/cursos/ejemplo"+i+".jpg"}"/>
                <div class="floatingTag">
                    <div class="dificultadTag">
                        ${dificultad == 0 ? "Facil" : dificultad == 1 ? "Intermedio" : "Dificil"}
                    </div>
                    <img class = "lvlImg" src="${"src/nivel"+dificultad+".png"}"/>
                </div>     

            </div>
            <div class="cursoTop">
                Curso acerca de...
            </div>
            <div class="cursoSubtop">
                <img class="colaboradorFoto" src="src/fotopelon.jpg"/>            
                <div class = "colaboradorTxt">
                        Elian Ramiro Gerard R.
                </div>
            </div>
            <div class="cursoBottom">
                <div class="seccionBottom">
                    <img class="basicImg" src="src/manitas.png"/>
                    <div class="manitasCounter" id="manitasCounter">+999</div>

                    <img class="basicImg" src="src/tiempo.png"/>
                    <div class="tiempoCounter" id="tiempoCounter">3 sem</div>

                    <img class="basicImg" src="src/save.png"/>
            </div>
        </article>
        `;
        app.innerHTML += curso;
    }
}