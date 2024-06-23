import Router from "express";


const router = Router();


//Query routes definitions
router.get('/author/:id', (req, res)=>{res.json({msg: `the books of the author with id ${req.params.id} are: `})})
router.get('/:id', (req, res)=>{ res.json({msg: `Hello world ${req.params.id}` }) });
router.get('/', (req, res)=>{res.json({msg: "Helo World!"})});




export default router;