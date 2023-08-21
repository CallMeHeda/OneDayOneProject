const { S3Client } = require("@aws-sdk/client-s3");
const multer = require("multer");
const multerS3 = require("multer-s3");

const bucketName = process.env.BUCKET_NAME;
const bucketRegion = process.env.BUCKET_REGION;
const s3AccessKey = process.env.S3_ACCESS_KEY;
const s3PrivateKey = process.env.S3_PRIVATE_KEY;

const s3Client = new S3Client({
  region: bucketRegion,
  credentials: {
    accessKeyId: s3AccessKey,
    secretAccessKey: s3PrivateKey,
  },
});

const upload = multer({
  storage: multerS3({
    s3: s3Client,
    bucket: bucketName,
    key: function (req, file, cb) {
      cb(null, "images/" + Date.now().toString() + "-" + file.originalname);
    },
  }),
});

module.exports = { upload, s3Client };
