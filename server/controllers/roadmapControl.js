import askai from "../config/askai.js";
import Roadmap from "../models/roadmap.model.js";
import ganaratePrompt from "../utils/ganratePrompt.js";
import responder from "../utils/responder.js";

const ganarateRoadmap = async (req, res) => {
   try {

      let { topic } = req.body;
      if (!topic) {
         return responder(res, 406, null, "topic is required to generate roadmap", false);
      }

      let question = ganaratePrompt(topic);

      let answer = await askai(question);

      const createdRoadmap = await Roadmap.create({
         name: topic,
         roadmap: answer,
         createdBy: req.user.id
      })

      const savedRoadmap = await createdRoadmap.save();

      return responder(res, 200, savedRoadmap.name, "roadmap created successfully", true);

   } catch (error) {
      return responder(res, error.status || 500, null, error.message, false);
   }
}

/*
 take a roadmap  id from parms 
 road map is exist or not if not give the error 
 if roadmap status is privte give the error 
 public hai to clone kr doo
   // check the user id is same =>


*/

const cloneRoadmap = async (req, res) => {
   try {

      let { id } = req.params;
      if (!id) {
         return responder(res, 404, null, "roadmap id is required", false)
      }

      let findedRoadmap = await Roadmap.findById(id);

      if (!findedRoadmap) {
         return responder(res, 404, null, "roadmap not found", false)
      }

      if (findedRoadmap?.status == "private") {
         return responder(res, 404, null, "roadmap is private", false);
      }

      // console.log(findedRoadmap.createdBy)

      // if (findedRoadmap?.createdBy.populate == req.user.id) {
      //    return responder(res, 401, null, "you can not clone your own roadmap", false);
      // }

      const createdRoadmap = await Roadmap.create({
         name: findedRoadmap.name,
         roadmap: findedRoadmap.roadmap,
         createdBy: req.user.id
      })

      const savedRoadmap = await createdRoadmap.save();
      return responder(res, 200, savedRoadmap.name, "roadmap cloned successfully", true);

   } catch (error) {
      return responder(res, error.status || 500, null, error.message, false);
   }
}



const getMyRoadmaps = async(req,res)=>{
   try {
      
    const findedRoadmaps = await Roadmap.find({createdBy:req.user.id}).select("-createdAt -updatedAt -__v")

    return responder(res, 200, findedRoadmaps, "roadmaps fetched successfully", true);

   } catch (error) {
       return responder(res, error.status || 500, null, error.message, false);
   }
}

const getRoadMpas = async (req,res) => {
    try {
      let roadmap = await Roadmap.find().select("roadmap name id ").populate("createdBy","name email _id");
      return responder(res,201,roadmap,"loadmaps load successfully",true);
    } catch (error) {
      return responder(res,501,null,error.message || "something went wrong",false)
    }
}

export { ganarateRoadmap, cloneRoadmap,getMyRoadmaps,getRoadMpas};