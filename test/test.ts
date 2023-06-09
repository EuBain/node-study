require('./test2')
console.log(module);
process.nextTick(()=> {
    console.log(module.id)
})

module.exports= 'tianran';