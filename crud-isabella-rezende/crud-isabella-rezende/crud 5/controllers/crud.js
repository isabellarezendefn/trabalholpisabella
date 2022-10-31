//Invocamos a conexão do DB
const conexao = require('../database/db');
//GUARDAR un REGISTRO
exports.save = (req, res)=>{
    const paciente = req.body.paciente;
    const tipoconsulta = req.body.tipoconsulta;
    const data = req.body.data;
    conexao.query(
        'INSERT INTO user(id, paciente,tipoconsulta, data) VALUES($1, $2, $3, $4)',
        [GeradorID(paciente,tipoconsulta, data), paciente, tipoconsulta, data],
        (error, results) => {
        if(error){
            console.log(error);
        }else{
            //console.log(results);   
            res.redirect('/');         
        }
});
};

// //Atualizar o registro
exports.update = (req, res)=>{
    const id = req.body.id;
    const paciente = req.body.paciente;
    const tipoconsulta = req.body.tipoconsulta;
    const data = req.body.data;
    conexao.query(
        'UPDATE user SET paciente=$1, tipoconsulta=$2, data=$3, id=$4  WHERE id=$4',
        [paciente, tipoconsulta, data, id],
        (error, results) => {
        if(error){
            console.log(error);
        }else{           
            res.redirect('/');         
        }
});
};

function GeradorID(paciente, tipoconsulta, data) {
    return Number(paciente.toString().length) + Number(tipoconsulta.toString().length) + Number(data.toString().length)
}