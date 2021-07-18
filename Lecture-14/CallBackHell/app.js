// Callbacks -- Not a good way

// function downloadFile(url, downloaded) {
//   console.log(`Starting the download from ${url}`);

//   setTimeout(function () {
//     const path = url.split("/").pop();
//     downloaded(path);
//   }, 3000);
// }

// function compressFile(path, compressed) {
//   console.log(`Starting the file compression of file ${path}`);

//   setTimeout(function () {
//     const compressedPath = path.split(".")[0] + ".zip";

//     compressed(compressedPath);
//   }, 2000);
// }

// function uploadFile(compressedPath, uploaded) {
//   console.log(`Starting to upload the file from ${compressedPath}`);

//   setTimeout(function () {
//     const uploadPath = "http://localsystem/" + compressedPath;
//     uploaded(uploadPath);
//   }, 3000);
// }

// downloadFile("http://facebook.com/profile.jpg", function (path) {
//   console.log(`File downloaded Successfully as ${path}`);
//   compressFile(path, function (compressedPath) {
//     console.log(`File compressed successfully as ${compressedPath}`);
//     uploadFile(compressedPath, function (uploadPath) {
//       console.log(`File uploaded Successfully at path ${uploadPath}`);
//       console.log("Everything is Done!!!");
//     });
//   });
// });

// ------Promises = Better way of writing async code

function downloadFile(url) {
  console.log(`Starting the download from ${url}`);

  return new Promise(function (resolve, reject) {
    if (!url.startsWith("http")) {
      throw new Error("Invalid Url");
    }

    setTimeout(function () {
      const path = url.split("/").pop();
      resolve(path);
    }, 3000);
  });
}

function compressFile(path) {
  console.log(`Starting the file compression of file ${path}`);

  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      const compressedPath = path.split(".")[0] + ".zip";
      resolve(compressedPath);
    }, 2000);
  });
}

function uploadFile(compressedPath) {
  console.log(`Starting to upload the file from ${compressedPath}`);

  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      const uploadPath = "http://localsystem/" + compressedPath;
      resolve(uploadPath);
    }, 3000);
  });
}

// downloadFile("http://facebook.com/profile.jpg").then(function (path) {
//   console.log(`File downloaded Successfully at path ${path}`);
//   compressFile(path).then(function (compressedPath) {
//     console.log(`File compressed successfully at ${compressedPath}`);
//     uploadFile(compressedPath).then(function (uploadPath) {
//       console.log(`File uploaded successfully at ${uploadPath}`);
//       console.log("Everything Done");
//     });
//   });
// });

downloadFile("htp://facebook.com/profile.jpg")
  .then(compressFile)
  .then(uploadFile)
  .then(function (uploadPath) {
    console.log(`File uploaded successfully at ${uploadPath}`);
    console.log("Everything Done");
  })
  .catch(function (e) {
    console.log(e.message);
    console.log("something went wront");
  });
