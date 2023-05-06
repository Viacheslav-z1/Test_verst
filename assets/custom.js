const commentsModal = document.querySelector(".comments-form"),
  closeModalBtn = document.querySelector(".comments-close-form"),
  postComment = document.querySelector(".coments-post"),
  openCommentNodal = document.querySelector(".comment-btn"),
  commentsInner = document.querySelector(".comments_face");

openCommentNodal.addEventListener("click", () => {
  commentsModal.classList.add("open");
});

closeModalBtn.addEventListener("click", () => {
  commentsModal.classList.remove("open");
});

commentsModal.addEventListener("submit", (e) => {
  e.preventDefault();
  let message = document.querySelector(".comments-form-textarea").value;

  if (message.trim() != "") {
    let comment = `
              <div class="comments" id="comment5" style="display: block">
                <div class="profile">
                  <img src="assets/images/no-avatar.png" />
                </div>
                <div class="comment-content">
                  <p class="name">
                    <font style="vertical-align: inherit">
                      <font style="vertical-align: inherit">Anonim</font>
                    </font>
                  </p>
                  <p>
                    <font style="vertical-align: inherit">
                      <font style="vertical-align: inherit"
                        >${message}</font
                      >
                    </font>
                  </p>
                </div>
                <div class="clr"></div>
                <div class="comment-status">
                  <span>
                    <font style="vertical-align: inherit">
                      <font style="vertical-align: inherit">Curte·comente</font>
                    </font>
                    <img
                      src="assets/images/like.png"
                      width="15px"
                      height="15px"
                    />
                    <font style="vertical-align: inherit">
                      <font style="vertical-align: inherit">39</font>
                    </font>
                  </span>
                  <small>
                    <u>
                      <font style="vertical-align: inherit">
                        <font style="vertical-align: inherit"
                          >2 hora antes</font
                        >
                      </font>
                    </u>
                  </small>
                </div>
              </div>
  `;

    commentsInner.innerHTML += comment;
    comment = "";
    message.value = "";
    commentsModal.reset();
    commentsModal.classList.remove("open");
  } else{
    alert('write comment')
    return
  }

  
});

postComment.addEventListener("click", () => {});
