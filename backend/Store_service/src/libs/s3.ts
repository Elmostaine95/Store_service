import { S3Client, PutObjectCommand, DeleteObjectCommand, GetObjectCommand } from "@aws-sdk/client-s3"
import  { getSignedUrl }  from "@aws-sdk/s3-request-presigner"
import settings from "./settings"
const uploadPath=settings.storage.s3.uploadPath
const s3Client = new S3Client(settings.storage.s3.client)

const bucketName = settings.storage.s3.bucketName

 function uploadFile(fileBuffer :any, fileName:any, mimetype:any) {
  const uploadParams = {
    Bucket: bucketName,
    Body: fileBuffer,
    Key:uploadPath+ fileName,
    ContentType: mimetype
  }

  return s3Client.send(new PutObjectCommand(uploadParams));
}

 function deleteFile(fileName:any) {
  const deleteParams = {
    Bucket: bucketName,
    Key: uploadPath+ fileName,
  }

  return s3Client.send(new DeleteObjectCommand(deleteParams));
}

async function getObjectSignedUrl(key:any) {
  const params = {
    Bucket: bucketName,
    Key: uploadPath + key
  }

  const command = new GetObjectCommand(params);
  const seconds = 600
  return await getSignedUrl(s3Client, command, { expiresIn: seconds });
  
}

export {
  uploadFile,
  deleteFile,
  getObjectSignedUrl
}