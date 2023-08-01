import api from "../../config/api"

export default async function handler(req, res) {
	const responseData = {
		success: false,
		products: []
	}
     try{
          const {data} = await api.get('products', {
               ...req.body
          });
          responseData.success = true;
		responseData.products = data;
		res.json( responseData );

     }catch(error){
          responseData.error = error.message
          res.status(500).json(responseData)
     }
}