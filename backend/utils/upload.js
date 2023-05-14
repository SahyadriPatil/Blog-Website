import {GridFsStorage} from 'multer-gridfs-storage'
import dotenv from 'dotenv';
import multer from 'multer';
dotenv.config();
const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;

const storage = GridFsStorage({
     url : `mongodb://${username}:${password}@ac-d31yumt-shard-00-00.hwxltbu.mongodb.net:27017,ac-d31yumt-shard-00-01.hwxltbu.mongodb.net:27017,ac-d31yumt-shard-00-02.hwxltbu.mongodb.net:27017/?ssl=true&replicaSet=atlas-g6e4gq-shard-0&authSource=admin&retryWrites=true&w=majority`,
    options: { useNewUrlParser: true },
    file:(req,file)=>{
        const match = ["image/png" ,"image/jpg"];
        if(match.indexOf(file.memeType) === -1)
        {
            return`${Date.now()}-blog-${file.originalname}`;
        }
        return{
            bucketName:"photos",
            filename:`${Date.now()}-blog-${file.originalname}`
        }
    }
    });
    export default multer({storage});


// // import multer from 'multer';
// // import { GridFsStorage } from 'multer-gridfs-storage';

// // const storage = new GridFsStorage({
// //     url: `mongodb://user:codeforinterview@blogweb-shard-00-00.ch1hk.mongodb.net:27017,blogweb-shard-00-01.ch1hk.mongodb.net:27017,blogweb-shard-00-02.ch1hk.mongodb.net:27017/BLOG?ssl=true&replicaSet=atlas-lhtsci-shard-0&authSource=admin&retryWrites=true&w=majority`,
// //     options: { useNewUrlParser: true },
// //     file: (request, file) => {
// //         const match = ["image/png", "image/jpg","image/jpeg"];

// //         if(match.indexOf(file.memeType) === -1) 
// //             return`${Date.now()}-blog-${file.originalname}`;

// //         return {
// //             bucketName: "photos",
// //             filename: `${Date.now()}-blog-${file.originalname}`
// //         }
// //     }
// // });

// // export default multer({storage}); 