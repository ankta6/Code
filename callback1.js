function download(url, callback) {
    setTimeout(() => {
      console.log(`Downloading ${url} ...`);
      callback(url);
    }, 1000);
  }
  
  const url1 = 'https://www.javascripttutorial.net/pic1.jpg';
  const url2 = 'https://www.javascripttutorial.net/pic2.jpg';
  const url3 = 'https://www.javascripttutorial.net/pic3.jpg';
 download(url1, function(url){
    console.log(`Processing ${url}`);
    download(url2,function(url){
    console.log(`Processing ${url}`);
    download(url3,function(url){
        console.log(`Processing ${url}`);
        });  
})
 });

// 3,12
// 3,14












//   download(url1, function (url) {
//     console.log(`Processing ${url}`); //1
//     download(url2, function (url) {
//       console.log(`Processing ${url}`); //2
//       download(url3, function (url) {
//         console.log(`Processing ${url}`); //3
//       });
//     });
//   });
  