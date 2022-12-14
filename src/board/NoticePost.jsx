import React from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import "../styles/board/NoticePost.scss";

const NoticePost = () => {
  return (
    <>
     
        <h1 style={{ color: "white" }}>공지사항 등록</h1>
      

      <CKEditor
        className="Editor"
        editor={ClassicEditor}
        data="<p>공지사항을 입력하세요.</p>"
        onReady={(editor) => {
          // You can store the "editor" and use when it is needed.
          console.log("Editor is ready to use!", editor);
        }}
        onChange={(event, editor) => {
          const data = editor.getData();
          console.log({ event, editor, data });
        }}
        onBlur={(event, editor) => {
          console.log("Blur.", editor);
        }}
        onFocus={(event, editor) => {
          console.log("Focus.", editor);
        }}
      />
      <article>
        <button class="btn">등록</button>

        <button class="btn">돌아가기</button>
      </article>
    </>
  );
};

export default NoticePost;
