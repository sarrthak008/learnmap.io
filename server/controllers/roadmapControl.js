import askai from "../config/askai.js";
import Roadmap from "../models/roadmap.model.js";
import ganaratePrompt from "../utils/ganratePrompt.js";
import responder from "../utils/responder.js";

const ganarateRoadmap = async (req, res) => {
     try {
        
        let  {topic} = req.body;
        if(!topic){
            return responder(res,406,null,"topic is required to generate roadmap",false);
        }

        let question = ganaratePrompt(topic);

        let answer = await askai(question);
      
        const createdRoadmap = await Roadmap.create({
           name:topic,
           roadmap:answer,
           createdBy: req.user.id
        })

        const savedRoadmap = await createdRoadmap.save();

        return responder(res,200,savedRoadmap.name,"roadmap created successfully",true);
        
     } catch (error) {
        return responder(res,error.status || 500,null,error.message,false);
     }
}


export {ganarateRoadmap};