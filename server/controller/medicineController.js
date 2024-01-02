import Medicine from "../model/medicineModel.js";

export const create = async(req, res)=>{
    try {

        const medicineData = new Medicine(req.body);

        if(!medicineData){
            return res.status(404).json({msg: "Medicine data not found"});
        }

        await medicineData.save();
        res.status(200).json({msg: "Medicine created successfully"});

    } catch (error) {
        res.status(500).json({error: error});
    }
}


export const getAll = async(req, res) =>{
    try {

        const medicineData = await Medicine.find();
        if(!medicineData){
            return res.status(404).json({msg:"Medicine data not found"});
        }
        res.status(200).json(medicineData);
        
    } catch (error) {
        res.status(500).json({error: error});
    }
}


export const getOne = async(req, res) =>{
    try {

        const id = req.params.id;
        const medicineExist = await Medicine.findById(id);
        if(!medicineExist){
            return res.status(404).json({msg: "Medicine not found"});
        }
        res.status(200).json(medicineExist);
        
    } catch (error) {
        res.status(500).json({error: error});
    }
}


export const update = async(req, res) =>{
    try {

        const id = req.params.id;
        const medicineExist = await Medicine.findById(id);
        if(!medicineExist){
            return res.status(401).json({msg:"Medicine not found"});
        }

        const updatedData = await Medicine.findByIdAndUpdate(id, req.body, {new:true});
        res.status(200).json({msg: "Medicine updated successfully"});
        
    } catch (error) {
        res.status(500).json({error: error});
    }
}


export const deleteMedicine = async(req, res) =>{
    try {

        const id = req.params.id;
        const medicineExist = await Medicine.findById(id);
        if(!medicineExist){
            return res.status(404).json({msg: "Medicine not exist"});
        }
        await Medicine.findByIdAndDelete(id);
        res.status(200).json({msg: "Medicine deleted successfully"});
        
    } catch (error) {
        res.status(500).json({error: error});
    }
}