function doGet() {
    var html = HtmlService.createHtmlOutputFromFile('index');
    return html.setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
  }
  
  
  function uploadFiles(data)
  {
   var file = data.myFile;
   var folder = DriveApp.getFolderById('1QcdePUMP9F5IVm_SgDxgVe1JNXmsKk0S');
   var createFile = folder.createFile(file);
   return createFile.getUrl();
  }