const Property = require('../models/property'); 
const propertyController = require('express').Router();
const verifyToken = require('../middleware/verifyToken');

//get all properties - localhost:5000/property/getAll
propertyController.get('/getAll', async (req, res) => {
    try{
        const properties = await Property.find({});
       
        return res.status(200).json(properties);
    }catch(err){
        res.status(500).json(error.message);
    }
});

//get featured - localhost:5000/property/find/featured
propertyController.get('/find/featured', async (req, res) => {
    try{
        const featuredProperties = await Property.find({featured: true}).populate('currentOwner', '-password');

        return res.status(200).json(featuredProperties);
    }catch(err){
        res.status(500).json(error.message);
    }
});

//get specific types - localhost:5000/property/find?type=${type}
propertyController.get('/find', async(req, res) => {
     // {ex, type: 'beach}
     const type = req.query;
    try{
        if(type){
            const properties = await Property.find(type).populate('currentOwner', '-password')
            return res.status(200).json(properties);
        } else{
            return res.status(500).json({message: 'No properties found'});
        }
    }catch(err){
        res.status(500).json(error.message);
    }
});
//"fixerUpper"|"classic"|"new"');
//get count of types -> ex: {fixer-upper: 5, classic: 10} - localhost:5000/property/find/types
propertyController.get('/find/types', async(req,res) => {
    try{
        const fixerUpperType = await Property.countDocuments({type: 'fixerUpper'})
        const classicType = await Property.countDocuments({type: 'classic'})
        const newType = await Property.countDocuments({type: 'new'})

        return res.status(200).json({
            fixerUpper: fixerUpperType, 
            classic: classicType, 
            new: newType
        });
    } catch(err){
        return res.status(500).json(error.message);
    }
    
});


//get individual property - localhost:5000/property/find/:id
propertyController.get('/find/:id', async (req, res) => {
    try{
        const property = await Property.findById(req.params.id).populate('currentOwner', '-password');
        if(!property){
            throw new Error('No property found');
        } else{
            return res.status(200).json(property);
        }
    } catch(error){
        return res.status(500).json(error.message);
    }
});


// create property - localhost:5000/property
propertyController.post('/', verifyToken, async (req, res) => {
    try {
        const newProperty = await Property.create({ ...req.body, currentOwner: req.user.id })

        return res.status(201).json(newProperty)
    } catch (error) {
        return res.status(500).json(error)
    }
})






//update property - localhost:5000/property/:id
propertyController.put('/:id', verifyToken, async(req,res) => {
    try{
        const property = await Property.findById(req.params.id)
        if(property.currentOwner.toString() !== req.user.id.toString()){
            throw new Error('You cannot update another users property!')
        } else{
            const updateProperty = await Property.findByIdAndUpdate(
                req.params.id,
                {$set: req.body},
                {new: true}
            )
            return res.status(200).json(updateProperty);
        }
    } catch (error){
        return res.status(500).json(error.message);
    }
})

//delete property - localhost:5000/property/:id

propertyController.delete('/:id', verifyToken, async(req,res)=> {
    try{
        const property = await Property.findByIdAndDelete(req.params.id)
        console.log(property.currentOwner.toString() !== req.user.id.toString())
        if(property.currentOwner.toString() !== req.user.id.toString()){
            throw new Error("You cannot delete another users property!")
        } else{
            //await property.remove()
            return res.status(200).json({message: "Property deleted successfully"})
        }
    } catch (error) {
        return res.status(500).json(error.message);
    }

})

module.exports = propertyController;