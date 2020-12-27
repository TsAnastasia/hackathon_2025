const templateAddImagecontainer = page.querySelector('.templateAddImageContainer');
const templateAddFileContainer = page.querySelector('.templateAddFileContainer');
const inputImageContainer = page.querySelector('#addImage');
const inputFileContainer = page.querySelector('#addFile');
const imagesAddContainer = page.querySelector('.form__listImages');
const filesAddContainer = page.querySelector('.form__listFiles');
const imagesList = [];
const filesList = [];
let fileId = 1;

const deleteFileFromPage = (list, fileId, container) => {
  const index = list.findIndex((element) =>{
    return element.id === fileId;
  });
  list.splice(index, 1);
  container.remove();
};

const addFileToList = (file, type, list, container) => {
  file.id = `${type}${fileId}`;
  container.id = `${type}${fileId}`;
  fileId += 1;
  list[list.length] = file;
};

const createImageContainer = (image) => {
  const imageAddContainer = templateAddImagecontainer.cloneNode(true).content;
  //TO DO: get path to image and show it
  imageAddContainer.querySelector('.form__deleteImage').addEventListener('click', (evt) => {
    deleteFileFromPage(imagesList, image.id, evt.target.closest('.form__itemImage'));
  });
  addFileToList(image, 'image', imagesList, imageAddContainer);
  toggleButtonState(formContainer, [...formElement.querySelectorAll(settingValidate.inputSelector)]);
  return imageAddContainer;
};

const createFileContainer = (file) => {
  const fileAddContainer = templateAddFileContainer.cloneNode(true).content;
  fileAddContainer.querySelector('.form__fileName').textContent = file.name;
  fileAddContainer.querySelector('.form__deleteFile').addEventListener('click', (evt) => {
    deleteFileFromPage(filesList, file.id, evt.target.closest('.form__itemFile'));
  });
  addFileToList(file, 'file', filesList, fileAddContainer);
  return fileAddContainer;
};

inputImageContainer.addEventListener('change', () => {
  images = [...inputImageContainer.files];
  images.forEach((image) => {
    imagesAddContainer.append( createImageContainer(image) );
  })
});

inputFileContainer.addEventListener('change', () => {
  files = [...inputFileContainer.files];
  files.forEach((file) => {
    filesAddContainer.append( createFileContainer(file) );
  })
});