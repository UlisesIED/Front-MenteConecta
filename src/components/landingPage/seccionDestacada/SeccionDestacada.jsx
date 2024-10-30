import React from 'react'

export function SeccionDestacada() {
    return (
        <section id="features" class="featured section">

            <div class="container section-title" data-aos="fade-up">
                <h2>Caracteristicas del sistema</h2>
            </div>

            <div class="container">

                <div class="row gy-4" data-aos="fade-up" data-aos-delay="100">

                    <div class="col-md-4">
                        <div class="card">
                            <div class="img">
                                <img src="assets/img/cards-4.png" alt="" class="img-fluid" />
                                <div class="icon"><i class="bi bi-hdd-stack"></i></div>
                            </div>
                            <h2 class="title">Evaluación del Estado Mental</h2>
                            <p>
                                La plataforma incluye formularios diseñados para evaluar el estado mental del usuario. Con base en las respuestas, se genera un prediagnóstico que ofrece una primera aproximación a su salud mental.
                            </p>
                        </div>
                    </div>

                    <div class="col-md-4" data-aos="fade-up" data-aos-delay="200">
                        <div class="card">
                            <div class="img">
                                <img src="assets/img/cards-2.png" alt="" class="img-fluid" />
                                <div class="icon"><i class="bi bi-brightness-high"></i></div>
                            </div>
                            <h2 class="title">Conexión con Especialistas</h2>
                            <p>
                                Tras el prediagnóstico, se presenta al usuario una lista de médicos especialistas que pueden ayudar en el tratamiento de múltiples padecimientos. Esto incluye la posibilidad de agendar citas, tanto telemedicina como presenciales.
                            </p>
                        </div>
                    </div>

                    <div class="col-md-4" data-aos="fade-up" data-aos-delay="300">
                        <div class="card">
                            <div class="img">
                                <img src="assets/img/cards-6.png" alt="" class="img-fluid" />
                                <div class="icon"><i class="bi bi-calendar4-week"></i></div>
                            </div>
                            <h2 class="title">Dashboard para Administradores</h2>
                            <p>
                                Se ofrecen herramientas para administradores, dashboards con estadísticas sobre la salud de los pacientes, garantizando la integridad y privacidad de la información personal.
                            </p>
                        </div>
                    </div>

                </div>

            </div>

        </section>
    )
}
