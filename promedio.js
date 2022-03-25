

//Calcular la media aritmética/promedio de la constante
//Necesitamos sumar todos los nros de la lista para eso se usará un ciclo for




function calcularMediaAritmetica(lista){
    let sumaLista = 0; //Acá guardamos la suma de los elementos
    for(let i = 0; i < lista.length; i++){
        sumaLista = sumaLista + lista[i];
    }
    
    //Dividirlo en la cantidad de elementos de nuestra lista
    const promedioLista = sumaLista / lista.length;
    return promedioLista;
}

