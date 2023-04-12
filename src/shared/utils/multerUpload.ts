import multer from 'multer';
import path from 'path';

const storage = multer.diskStorage({
    destination: function (_req, _file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (_req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
        cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
    },
});



export const upload = multer({
    storage: storage,
    fileFilter: (_req, file, cb) => {
        console.log("--- inside of multer ---")
        if (!file.originalname.match(/\.(jpg|jpeg|png|gif)$/)) {
            return cb(new Error('Only image files are allowed!'));
        }

        cb(null, true);
    },
}).array('image', 5)