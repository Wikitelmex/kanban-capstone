export class Templates {
  static CharacterCard(element = {}) {
    const res = `
      <div class="card m-3 w18rem">
        <img src="${element.img}" class="card-img-top imgCard" alt="walter white" >
        <div class="card-body">
          <div class="d-flex flex-row justify-content-between">
            <h5 class="card-title">${element.name}</h5>
            <div class="d-flex flex-column align-items-center">
              <i class="bi bi-heart"></i>
              <p>5 likes</p>
            </div>
          </div>
          <button class="btn btn-outline-secondary shadow m-1 w-100">Comments</button>
          <button class="btn btn-outline-secondary shadow m-1 w-100">Reservations</button>
        </div>
      </div>
    `;
    return res;
  }

  static failAlert(text = '') {
    const res = `
        <div class="alert alert-danger alert-dismissible fade show fixed-bottom" role="alert">
            <strong>Houston, we have a problem!</strong> ${text}.
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
        `;
    return res;
  }
}
