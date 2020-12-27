
const months = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];

const templatePhotoContainer = page.querySelector('.templateInitiativeImage').content;
const imagesContainer = page.querySelector('.initiative__images');
const templateFileContainer = page.querySelector('.templateInitiativeFile').content;
const buttonShowFiles = page.querySelector('.initiative__button_type_file');
const filesContainer = page.querySelector('.initiative__files');
const buttonLike = page.querySelector('.initiative__like');

const templateCommentContainer = page.querySelector('.templateInitiativeComment').content;
const commentsContainer = page.querySelector('.comments__list');
const formAddComment = page.querySelector('.addComment');
const inputAddComment = page.querySelector('.addComment__text');
const buttonAddComment = page.querySelector('.addComment__button');

const createPhotoContainer = (link) => {
  const imageContainer = templatePhotoContainer.cloneNode(true);
  imageContainer.querySelector('.initiative__image').src = link;
  return imageContainer;
}

const createFileContainer = (file) => {
  const fileContainer = templateFileContainer.cloneNode(true); 
  fileContainer.querySelector('.initiative__fileType').textContent = file.name.slice(file.name.lastIndexOf('.') + 1, file.name.length);
  fileContainer.querySelector('.initiative__fileName').textContent = file.name;
  fileContainer.querySelector('.initiative__fileSize').textContent = file.size;
  return fileContainer;
};

const showfiles = () => {
  initiative.files.forEach((file) => {
    filesContainer.append(createFileContainer(file));
  });
  pageContent.classList.add('page__content_darking');
  filesContainer.classList.add('initiative__files_visible');
  page.addEventListener('click', hideFiles);
};

const hideFiles = (evt) => {
  if (!evt.target.closest('.initiative__files')){
    filesContainer.textContent = '';
    pageContent.classList.remove('page__content_darking');
    filesContainer.classList.remove('initiative__files_visible');
    page.removeEventListener('click', hideFiles);
  }
};

const createCommentContainer = (comment) => {
  const commentContainer = templateCommentContainer.cloneNode(true);
  commentContainer.querySelector('.comment__avatar').style.backgroundImage = `url("${comment.avatarLink}")`;
  commentContainer.querySelector('.comment__author').textContent = comment.author;
  commentContainer.querySelector('.comment__qoute').textContent = comment.qoute;
  commentContainer.querySelector('.comment__date').textContent = comment.date;
  return commentContainer;
}

const checkValidityComment = () => {
  inputAddComment.validity.valid ? buttonAddComment.removeAttribute('disabled', true) : buttonAddComment.setAttribute('disabled', true);
};

const submitAddComment = () => {
  const comment = {};
  comment.avatarLink = './images/avatars/initial.svg';
  comment.author = person.name;
  comment.qoute = 'Пусть тени на стене Рисуют фонари ночные.';
  let date = new Date();
  comment.date = `${date.getUTCDate()} ${months[date.getMonth()]} ${date.getFullYear()}`;
  commentsContainer.append(createCommentContainer(comment));
  formAddComment.reset();
  checkValidityComment();
  //TO DO: send comment to server
};

initiative.imagesLinks.forEach((link) => {
  imagesContainer.append(createPhotoContainer(link));
});

buttonLike.textContent = initiative.likes;
if (initiative.activeLike) {
  buttonLike.classList.add('initiative__like_active');
};

initiative.comments.forEach((comment) => {
  commentsContainer.append(createCommentContainer(comment));
});

buttonShowFiles.addEventListener('click', (evt) => {
  evt.stopPropagation();
  showfiles();
});

buttonLike.addEventListener('click', () => {
  if (buttonLike.classList.contains('initiative__like_active')){
    buttonLike.textContent = Number(buttonLike.textContent) - 1;
    initiative.activeLike = false;
  }else{
    buttonLike.textContent = Number(buttonLike.textContent) + 1;
    initiative.activeLike = true;
  };
  buttonLike.classList.toggle('initiative__like_active');
  //TO DO: update initiative.activeLike on server
});

inputAddComment.addEventListener('input', (evt) =>{
  checkValidityComment();
  if (evt.key === 'Enter'){
    submitAddComment();
  }
});

formAddComment.addEventListener('submit', (evt) =>{
  evt.preventDefault();
  submitAddComment();
});