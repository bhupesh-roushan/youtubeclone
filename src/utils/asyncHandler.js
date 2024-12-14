const asyncHandler = (requestHandler) => {
  (req, res, nect) => {
    Promise.resolve(requestHandler(req, res, next)).catch((err) => next);
  };
};

export { asyncHandler };


























// const asyncHandler =(fn)=>async(req,res,next)=>{
//     try {
//         await fn(req,res,next)
//     } catch (error) {
//         res.status(err.code || 500).json({
//             success:false,
//             message:err.message
//         })
//     }
// }
