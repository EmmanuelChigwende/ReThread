import multer from 'multer'


const storage = multer.memoryStorage()
const image = multer({storage})

export default image