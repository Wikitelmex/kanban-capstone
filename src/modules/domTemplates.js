export class Templates {
  static CharacterCard(element = {}) {
    const res = `
      <div class="card m-3 w18rem">
        <img src="${element.img}" class="card-img-top imgCard" alt="walter white" >
        <div class="card-body">
          <div class="d-flex flex-row justify-content-between">
            <h5 class="card-title">${element.name}</h5>
            <div class="d-flex flex-column align-items-center">
              <i id="likeButton${element.char_id}" class="bi bi-heart" onclick="window.addLike('${element.char_id}')"></i>
              <p><span id="item${element.char_id}">0</span> likes</p>
            </div>
          </div>
          <button class="btn comment-btn btn-outline-success shadow m-1 w-100" data-bs-toggle="modal" data-bs-target="#charModal">Comments</button>
          <button class="btn btn-outline-success shadow m-1 w-100">Reservations</button>
        </div>
      </div>
    `;
    return res;
  }

  static likesAmount(likes = 0) {
    const res = `
      ${likes}
    `;
    return res;
  }

  static failAlert(text = '') {
    const res = `
        <div class="alert alert-danger alert-dismissible fade show fixed-bottom zindexfront" role="alert">
            <strong>Houston, we have a problem!</strong> ${text}.
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
        `;
    return res;
  }

  static commentsSection(comment = {}) {
    const res = `
    <p>
      <i>${comment.creation_date} </i>
      <b>${comment.username}: </b>
      <span>${comment.comment}</span>
    </p>
    `;
    return res;
  }

  static commentButton() {
    const res = '<button id="comment-submit" type="button" class="btn btn-primary">Comment</button>';
    return res;
  }
}
