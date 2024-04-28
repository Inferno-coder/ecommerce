exports.getAllProducts=async(req,res,next)=>{
  res.json({
    success:true,
    msg:'working'
  })
}

exports.getSingleProducts=async(req,res,next)=>{
    res.json({
      success:true,
      msg:'working single'
    })
  }