import express from "express";

const app = express(); //instancia de la libreria/paquete/modulo

app.use(express.json()); //decodificar

//crear endpoint para hacer una suma

app.get('/sumar', (req, res)=>{ //funciones flecha
    const num1 = req.body.num1;
    const num2= req.body.num2;

    const result = num1 + num2;

    return res.status(200).json({result}); //codigo 200 de resultado de successfull
})

app.get('/restar', (req, res)=>{ //funciones flecha
    const num1 = req.body.num1;
    const num2= req.body.num2;

    const result = num1 - num2;

    return res.status(200).json({result}); //codigo 200 de resultado de successfull
})

app.get('/multiplicar', (req, res)=>{ //funciones flecha
    const num1 = req.body.num1;
    const num2= req.body.num2;

    const result = num1 * num2;

    return res.status(200).json({result}); //codigo 200 de resultado de successfull
})

app.get('/dividir', (req, res)=>{ //funciones flecha
    const num1 = req.body.num1;
    const num2= req.body.num2;

    const result = num1 / num2;

    return res.status(200).json({result}); //codigo 200 de resultado de successfull
})

app.listen(4000, ()=>{  //para ver si esta funcionando la conexion   
    console.log("conexion exitosa.")
})



