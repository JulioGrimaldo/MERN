const bicisCtrl = {};
const Bici = require('../models/Bici')
//Obtener las bicis 
bicisCtrl.getBicis = async (req, res) => {
    const Bicis = await Bici.find();
    res.json({ Bicis });
}

bicisCtrl.createBici = async (req, res) => {
    const {id, marca, cantidad, descripcion} = req.body;
    const newBici = new Bici({
        id: id,
        marca: marca,
        cantidad: cantidad,
        descripcion: descripcion
    });
    console.log(newBici)
    res.json({ message: 'Bici Guardada Correctamente' });
    await newBici.save();
}

bicisCtrl.getBici = async (req, res) => {

    const bici = await Bici.findById(req.params.id);
    console.log = (bici);
    res.json(bici);
}
bicisCtrl.updateBici = async (req, res) => {
    const { id: id,
        marca: marca,
        cantidad: cantidad,
        descripcion: descripcion} = req.body
    await Bici.findByIdAndUpdate(req.params.id, req.body);
    res.json({ message: 'Bici Updated' });

}
bicisCtrl.deleteBici = async (req, res) => {
    await Bici.findByIdAndDelete(req.params.id);
    res.json({message: 'Bici Borrada'})
}
module.exports = bicisCtrl;