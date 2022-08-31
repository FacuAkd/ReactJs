import Celda from '../Imagenes/Celda.jpg';    

function Card(){
    return(
        <div>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"></link>
            <div class="container">
                <div class="row">
                    <div class="col">
                        <div class="card mb-3">
                            <img src={Celda} class="card-img-top" alt="..."></img>
                            <div class="card-body">
                                <h5 class="card-title text-center">Celda de Compresion</h5>
                                <p class="card-text">Celda de Carga de Marca Laumas. Peso maximo de 1000gr. 1mV/V Precio: $500</p>
                                <div class="d-grid gap-2 d-md-block">
                                    <button class="btn btn-primary clickPrecio" type="button"> Añadir </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card" >
                            <img src={Celda} class="card-img-top" alt="..."></img>
                            <div class="card-body">
                                <h5 class="card-title text-center">Celda de Compresion</h5>
                                <p class="card-text">Celda de Carga de Marca Laumas. Peso maximo de 2000gr. 1mV/V Precio: $550</p>
                                <div class="d-grid gap-2 d-md-block">
                                    <button class="btn btn-primary clickPrecio" type="button"> Añadir </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col">
                        <div class="card">
                        <img src={Celda} class="card-img-top" alt="..."></img>
                            <div class="card-body">
                                <h5 class="card-title text-center">Celda de Compresion</h5>
                                <p class="card-text">Celda de Carga de Marca Laumas. Peso maximo de 1000gr. 2mV/V Precio: $450</p>
                                <div class="d-grid gap-2 d-md-block">
                                    <button class="btn btn-primary clickPrecio" type="button"> Añadir </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;